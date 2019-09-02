from tornado import websocket, web, ioloop, httpserver
import tornado
 
class WSHandler(tornado.websocket.WebSocketHandler):
 
        def check_origin(self, origin):
                    return True
                    	
        def open(self):
            print("Connection Opened")
            pass

        def on_message(self, message):
            self.write_message("You said: " + message)
            print(self.request.remote_ip)
            print(self.stream.socket.getpeername()[1])
            player_address = {"clientIP": self.request.remote_ip, "portNumber": self.stream.socket.getpeername()[1]}
            for x in player_address.values():
                print(x)
            pass                        	
 
        def on_close(self):
            pass
 
app= tornado.web.Application([
        	#map the handler to the URI named "test"
        	(r'/', WSHandler),
])
 
if __name__ == '__main__':
        	server_port=8080
        	app.listen(server_port)
        	ioloop.IOLoop.instance().start()