# Agentic Healthcare Assistant

A full-stack, AI-powered healthcare assistant built as a final-year project. The backend and frontend are fully decoupled — the backend exposes a REST API, and the frontend consumes it over HTTP.

## Tech Stack

- Backend: Python, FastAPI, PostgreSQL
- Frontend: React
- AI Layer: (to be added)

## Project Structure

agentic-healthcare-assistant/
- backend/ — FastAPI application, AI logic, database models
- frontend/ — React application
- docs/ — Architecture diagrams, notes, screenshots

## Getting Started

### Backend

Run these commands in order:

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload

Then visit http://127.0.0.1:8000/docs for the interactive API documentation.

## Status

In active development.