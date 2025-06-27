from datetime import datetime
import pytz

def format_prediction_timestamp():
    """Returns the current date and time formatted in PH time zone."""
    ph_timezone = pytz.timezone("Asia/Manila")
    now = datetime.now(ph_timezone)

    formatted_timestamp = now.strftime("%I:%M:%S %p, %A, %B %d, %Y")
    return formatted_timestamp
