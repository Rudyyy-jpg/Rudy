# Personal Website

This is a personal portfolio website built with Flask, featuring a homepage, about, services, case studies, booking, and contact pages. The site uses Tailwind CSS for styling and includes a basic JavaScript file for interactivity.

## Project Structure
```
personal_site/
├── static/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── js/
│       └── script.js
├── templates/
│   ├── about.html
│   ├── base.html
│   ├── booking.html
│   ├── case_studies.html
│   ├── contact.html
│   ├── index.html
│   └── services.html
├── app.py
├── print.py
├── requirements.txt
└── vercel.json
```

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd personal_site
   ```
2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Flask application**:
   ```bash
   python app.py
   ```
   Open `http://localhost:5000` in your browser.
5. **Run the Project Explorer (optional)**:
   ```bash
   python print.py
   ```
   Requires PyQt6 to be installed (`pip install PyQt6`).

## Customization
- Update placeholders in `templates/` (e.g., `[Your Name]`) with your details.
- Add images to `static/images/` and reference them in HTML.
- Modify `static/js/script.js` for additional interactivity.

## Deployment
- The `vercel.json` file is configured for deployment on Vercel. Deploy using Vercel's CLI or platform.

## License
MIT License