export default async function handler(req, res) {

try{

const response = await fetch(

"https://openrouter.ai/api/v1/chat/completions",

{

method:"POST",

headers:{

"Authorization":
`Bearer ${process.env.OPENROUTER_API_KEY}`,

"Content-Type":
"application/json"

},

body:JSON.stringify({

model:"openrouter/free",

messages:req.body.messages

})

}

);



const data = await response.json();



res.status(200).json({

reply:

data.choices?.[0]?.message?.content ||

"Sin respuesta"

});


}



catch(error){


res.status(500).json({

error:error.message

});


}


}
