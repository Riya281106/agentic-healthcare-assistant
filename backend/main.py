from fastapi import FastAPI

app = FastAPI(title="Agentic AI Healthcare Assistant")

@app.get("/")
def root():
    return {"message": "Agentic AI Healthcare Assistant backend is running"}