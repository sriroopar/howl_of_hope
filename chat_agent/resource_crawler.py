import requests
from bs4 import BeautifulSoup
import pandas as pd
import re

# List of URLs to scrape
urls = [
    "https://www.fns.usda.gov/snap/students",
    "https://www.ncdhhs.gov/divisions/child-and-family-well-being/food-and-nutrition-services-food-stamps#FindOutifImEligible-4800",
    "https://packessentials.dasa.ncsu.edu/feed-the-pack/",
    "https://packessentials.dasa.ncsu.edu/support-feed-the-pack/",
    "https://packessentials.dasa.ncsu.edu/food-resources/"
]

# Function to clean extracted text
def clean_text(text):
    """Removes excessive whitespace and newlines"""
    return re.sub(r'\s+', ' ', text).strip()

# Function to scrape text from a webpage
def scrape_page(url):
    """Fetches and extracts all visible text from a webpage"""
    try:
        headers = {"User-Agent": "Mozilla/5.0"}
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()  # Raise error for HTTP issues

        soup = BeautifulSoup(response.text, "html.parser")

        # Remove script and style elements
        for tag in soup(["script", "style", "meta", "noscript"]):
            tag.extract()

        # Extract visible text from the body
        text = clean_text(soup.get_text())

        return {"url": url, "content": text}
    
    except Exception as e:
        return {"url": url, "content": f"Error: {str(e)}"}

# Scrape each URL
scraped_data = [scrape_page(url) for url in urls]

# Save extracted data to CSV
csv_filename = "web_scraped_text.csv"
df = pd.DataFrame(scraped_data)
df.to_csv(csv_filename, index=False, encoding="utf-8")

print(f"✅ Data saved to {csv_filename}")
