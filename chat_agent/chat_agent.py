import streamlit as st
from streamlit_chat import message
from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from langchain.chains import ConversationalRetrievalChain
from langchain.document_loaders.csv_loader import CSVLoader
from langchain.chat_models import ChatOpenAI
from langchain.vectorstores import FAISS
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv(override=True)

OPENAI_API_KEY = "key"

# Load the uploaded CSV file
data_file = "../Hackathon/web_scraped_data.csv"
loader = CSVLoader(file_path=data_file, encoding='utf-8')
data = loader.load()

# Create embeddings and vector store
embeddings = HuggingFaceEmbeddings()
print("Created Embeddings")
vectorstore = FAISS.from_documents(data, embeddings)
chain = ConversationalRetrievalChain.from_llm(
    llm=ChatOpenAI(temperature=0.0, model_name='gpt-3.5-turbo', api_key=OPENAI_API_KEY),
    retriever=vectorstore.as_retriever()
)

def query_bot(query):
    response = chain({"question": query, "chat_history": st.session_state['history']})
    st.session_state['history'].append((query, response["answer"]))
    return response['answer']

# Streamlit UI Configuration
st.set_page_config(page_title="GrokBot 🤖")
st.title("GrokBot 🤖")

# Initialize session state
if 'history' not in st.session_state:
    st.session_state.history = []
if 'bot' not in st.session_state:
    st.session_state.bot = ["Hello! How can I assist you today?"]
if 'past' not in st.session_state:
    st.session_state.past = ['Hey there! 👋']

# Chat Interface
response_container = st.container()
container = st.container()

with container:
    with st.form(key='grok_form', clear_on_submit=True):
        query = st.text_input("Query:", placeholder='Enter your query here:', key='input')
        submit_button = st.form_submit_button(label='Submit')

    if submit_button and query:
        output = query_bot(query)
        st.session_state.past.append(query)
        st.session_state.bot.append(output)

# Display Chat Messages
if st.session_state.bot:
    with response_container:
        for i in range(len(st.session_state.bot)):
            message(st.session_state.past[i], is_user=True, key=str(i) + '_user', avatar_style='big-smile')
            message(st.session_state.bot[i], key=str(i), avatar_style='thumbs')

