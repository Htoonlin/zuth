from sqlalchemy import create_engine,select
from baseModel import BaseModel
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime


class SQLBaseManager():


    # @classmethod
    # def start_engine(self):
    

    def __init__(self,_db_url) :
         self._db_url = _db_url
         self.engine = create_engine(_db_url)
         BaseModel.metadata.create_all(self.engine)

    def initDatabaseModel(self,model: BaseModel):
        BaseModel.metadata.create_all(self.engine)
        
    def selectAll(self,Base): 
        with Session(self.engine) as session:
            stmt = select(Base)
            dataList = session.execute(stmt).scalars().all()
            return dataList
         

    def bulk_insert(self,rows: list[BaseModel]):
        with Session(self.engine) as session:
            session.add_all(rows)
            session.commit()
        

    def update(self,new_data: BaseModel):
        with Session(self.engine) as session:
            mtoUpdate =  session.get(BaseModel,new_data.id)
            mtoUpdate = new_data
            session.commit()
            print(mtoUpdate)
        
    def delete(self,id: int):
        with Session(self.engine) as session:
            mtoUpdate =  session.get(BaseModel,id)
            session.delete(mtoUpdate)
            session.commit()
        
