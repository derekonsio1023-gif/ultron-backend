import OpenAI from "openai";


const client = new OpenAI({

apiKey:process.env.OPENAI_API_KEY

});



export default async function handler(req,res){


try{


const messages = req.body.messages;



const response = await client.chat.completions.create({

model:"gpt-5",

messages


});



res.status(200).json({


reply:

response.choices[0].message.content


});


}


catch(error){


res.status(500).json({

error:error.message

});


}



}