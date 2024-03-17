from typing import Any
from sqlalchemy.orm import DeclarativeBase,Mapped,mapped_column
from sqlalchemy import String,Integer,TIMESTAMP
from sqlalchemy.sql import func
import sqlalchemy as sa
import datetime;
# default fields for BaseModel
class BaseModel(DeclarativeBase):
    

    id: Mapped[int] = mapped_column(primary_key=True)
    created_at: Mapped[str] = mapped_column(String,nullable=True)
    modified_at: Mapped[str] = mapped_column(String,nullable=True)
    delete_axt: Mapped[str] = mapped_column(String,nullable=True)
    created_by: Mapped[str] = mapped_column(String,nullable=True)
    modified_by: Mapped[str] = mapped_column(String,nullable=True)
    version:Mapped[int] = mapped_column(Integer,nullable=True,default=1)


    def initializeDefaultFields(self):
        ct = datetime.datetime.now()
        self.created_at = ct

    def __repr__(self) -> str:
        return f"<Model : {self.id}, created at: {self.created_at} by : {self.created_by}, version: {self.version}"

