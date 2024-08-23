import pika
import os
from doenv import load_dotenv, doteenv_values
load_dotenv
#decode converte para string
|#importação, cofiguração e o método

def receive_message(ch, method, properties, body):
    print(body.decode())


URL = os.getenv("URL")
queue="datsets"
params = pika.URLParameters(URL)
connection = pika.blockingConnection(params)
channel = connection.channel()
channel.queue_declare(queue="datasets", durable = True)

channel.queue_declare(queue= queue, durable = True)
channel.basic_consume (queue = queue, on_message_callback = receive_message, auto_ack =True)


try: 
    channel.start_consuming()
except KeyboardInterrupt:
    channel.stop_consumig()