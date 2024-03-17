

from typing import Any
from sqlalchemy import String,Numeric,create_engine,select
from sqlalchemy.orm import DeclarativeBase, Mapped , mapped_column,Session
from baseModel import BaseModel
from sqlManager import SQLBaseManager
from flask import app
class User(BaseModel):
    __tablename__ = "user"

    name: Mapped[str]  = mapped_column(String(32))
    nrc: Mapped[str]  = mapped_column(String(32))
    address: Mapped[str] = mapped_column(String(32))
    postalCode: Mapped[int] = mapped_column(Numeric(5))
    occupation: Mapped[str] = mapped_column(String(32))

    def __init__(self, **kw: Any):
        super().__init__(**kw)
        super().initializeDefaultFields()

    



user = User(name="SeintSan",nrc="4234324W",address="Singapore Road, Sg",postalCode=530960,occupation="Software Developer")
sqlmgr = SQLBaseManager("sqlite:///demo.db")
sqlmgr.bulk_insert([user])


