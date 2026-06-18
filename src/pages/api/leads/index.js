import axios from "axios";
const qs = require('qs')

export default async function handler(req, res) {
    if (req.method === 'POST') {
      let params = req.body;
      if(params.name == "" || params.name.length < 2){
        res.status(400).json({ error: true, message:"Name should be atleast 3 characters long" })
      }
      else if(params.email == "" || !validateEmail(params.email)){
        res.status(400).json({ error: true, message:"Enter valid email" })
      }
      else if(params.phone == "" || !validatePhone(params.phone)){
        res.status(400).json({ error: true, message:"Enter valid mobile" })
      }
      else{
        let response = await add_lead_to_db(params);
        if(response.data.error === true){
          res.status(400).json({ error: true, message:"Something went wrong" })
        }
        res.status(200).json({ error: false, message:JSON.stringify(response.data) })
      }
    } else {
        res.status(400).json({ error: true, message:"Method not supported" })
    }
  }


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const validatePhone = (phone) => {
    return String(phone).match(
      /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
    )
  }


  const add_lead_to_db = async (qdata)=>{
    let data = qs.stringify(qdata);
    // {
    //   'name': 'Sourabh Pisolkar',
    //   'phone': '+919029690500',
    //   'email': 'sourabh@vkss.tech',
    //   'source': 'google-search',
    //   'campaign': 'elicity-google-search',
    //   'medium': 'cpc' 
    // }
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: process.env.API_URL,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    let res = await axios.request(config)
    return res;
    
  }