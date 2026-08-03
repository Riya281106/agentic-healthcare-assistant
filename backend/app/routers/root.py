from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_root():
    return {"message": "Agentic Healthcare Assistant backend is running"}