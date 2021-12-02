**Candidate: Davide Domenico Arcinotti**'

**A little disclaimer** 
I'm used to work with docker compose, so the instructions to start the various containers might result a bit tedious   
    
**instructions**
I'm assuming no other container (like mongodb) is currently running or created on the target pc. Please change IP's for mongo in database/constanst folder id there is a problem in connection ( docker assigns ips in sequence)

Run:
``` ./mongo-start.sh ```

Run:
``` ./docker-build.sh ```


Run:
``` ./docker-start.sh ```

Hit
```localhost:3000/api``` for the swagger documentation.

Remember the API server is working on port 3000.    

I suggest using this service https://placeholder.com/ for icons urls. ( i didnt implement a serialiser for them due to scarce time );

The only fields to be filled are 'icon' and 'name'. ID is created by mongo ( but is still required).

Remeber to send jsons as body.    
this is an example POST request   
```
{
    "name": "A crappy sound",
    "icon": "https://via.placeholder.com/1024x768.png?text=ABadImage"
}
```

I suggest to play a bit with both dimensions and colors to test the frontend.

![Alt text](readme.png?raw=true "Postman")

**TECH USED**   
I used NestJs for the server side, i find it wonderful.  
I didnt have time to implement mem-cache, authorization path nor a simple load balancer. Apologies.
