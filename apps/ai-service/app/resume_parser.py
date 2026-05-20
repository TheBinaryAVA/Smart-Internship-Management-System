from pypdf import PdfReader


def extract_text_from_pdf(file_path: str) -> str:
    """Extract text from PDF using pypdf; returns empty string on failure."""
    try:
        reader = PdfReader(file_path)
        text = ""
        for page in reader.pages:
            text += (page.extract_text() or "") + "\n"
        return text.strip()
    except Exception:
        return ""
