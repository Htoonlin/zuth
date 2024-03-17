import atexit
import datetime as dt
import json
import logging
from typing import override
import pathlib

LOG_RECORD_BUILTIN_ATTRS = {    
    "asctime",
    "levelname",
    "clientip",
    "user", 
    "module",
    "funcName",
    "lineno",
    "threadName",
    "message",
    "created",
    "exc_info",
    "exc_text",
    "filename", 
    "levelno",
    "msecs",
    "msg",
    "name",
    "pathname",
    "process",
    "processName",
    "relativeCreated",
    "stack_info",
    "thread",    
    "taskName", 
    "args"
}

class MyJSONFormatter(logging.Formatter):
    def __init__(self,*,fmt_keys: dict[str, str] | None = None,):
        super().__init__()
        self.fmt_keys = fmt_keys if fmt_keys is not None else {} 
        
    @override
    def format(self, record: logging.LogRecord) -> str:      
        super(MyJSONFormatter, self).format(record)
        message = self._prepare_log_dict(record) 
        return json.dumps(message,indent=2) 

    @override
    def _prepare_log_dict(self, record: logging.LogRecord): 
        try:
            messagerecord=json.loads(record.message)
        except:
            messagerecord=record.message

        always_fields = {
            "message": messagerecord ,
            "timestamp": dt.datetime.fromtimestamp(
                record.created, tz=dt.timezone.utc
            ).isoformat(),                    
        }                 

        message = {
            key:msg_val
            if (msg_val := always_fields.pop(val, None)) is not None
            else getattr(record, val)
            for key, val in self.fmt_keys.items()
        }
        message.update(always_fields)

        return message


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
          
      


    