import atexit
import datetime as dt
import json
import logging
from typing import override
import pathlib


class NonErrorFilter(logging.Filter):
    @override
    def filter(self, record: logging.LogRecord) -> bool | logging.LogRecord:
        return record.levelno <= logging.INFO

class Log:
    def __init__(self,storageType):        
        config_file=""
        if storageType.upper() == "JSON":
            config_file=pathlib.Path("backend/app/main/config/json_config.json")
        else:
            config_file=pathlib.Path("backend/app/main/config/txt_config.json") 

        with open(config_file) as f_in:
            config=json.load(f_in) 

        logging.config.dictConfig(config)      
          
      


    