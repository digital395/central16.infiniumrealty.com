import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

function QueryForm({showBG=true,download=false}){
  
  const [name,setName] = useState("");
  const router = useRouter();  
  const [email,setEmail] = useState("");
  const [phone,setPhone]= useState("");
  const [message,setMessage]= useState("");
  const [source,setSource] = useState("")
  const [campaign,setCampaign] = useState("")
  const [medium,setMedium] = useState("")
  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")
  const [isWhatsApp,setIsWhatsApp] = useState(true)
  const submitForm = useCallback(async ()=>{
    let data = JSON.stringify({
      "name": name,
      "email": email,
      "phone": phone,
      "message":message,
      "source":source,
      "campaign":campaign,
      "medium":medium,
      "page":router.pathname,
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/api/leads',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    try{
    let res = await axios.request(config);
    console.log(res);
    if(res.error){
        //setSuccess("Thank you! Someone from our team will get in touch with you soon.");
        // setEmail("");
        // setPhone("");
        // setName("");
        setError(res.message)
    }else{
      setError("Thank you! Someone from our team will get in touch with you soon.");
      setEmail("");
        setPhone("");
        setName("");
        router.replace('/Central_16_Brochure.pdf')
    }
    }catch(e){
      setSuccess("");
        // setEmail("");
        // setPhone("");
        // setName("");
      setError(e.response.data.message)
    }
    
  },[name,email,phone,source])

  useEffect(()=>{
    setSource(router.query.utm_source);
    setMedium(router.query.utm_medium);
    setCampaign(router.query.utm_campaign);
  })
  return(
    <section id="enquire-now" className={`${showBG? 'bg-blue text-gray-50 pt-14':'bg-[#e4e0dc] text-black py-2'}`}>
        
          <div className='flex flex-col justify-between gap-2 lg:gap-6 items-center lg:justify-center container px-4 mx-auto pb-14'>
            <div className="text-sm uppercase">Quick Contact</div>
            <h3 className={`text-xl text-center capitalize w-full px-12 lg:px-0  ${showBG && "lg:w-1/3"}`}>If you have any question? we are glad to consult you as soon as possible</h3>
            <div className={`form-group grid lg:grid-cols-3 gap-8 w-full ${showBG && "lg:w-2/3"} lg:items-center lg:justify-center px-10`}>
              <span className={`text-red-400 lg:col-span-3 text-center ${error === ""?'hidden':'block'}`}>{error}</span>
              <span className={`text-cyan-100 lg:col-span-3 text-center ${success === ""?'hidden':'block'}`}>{success}</span>
              <input type='text' placeholder='Name' className='h-12 p-3 text-black rounded-md' value={name} onChange={e=>setName(e.target.value)} />
              <input type='text' placeholder='Email' className='h-12 p-3  text-black rounded-md' value={email} onChange={e=>setEmail(e.target.value)} />
              <input type='text' placeholder='Phone' className='h-12 p-3  text-black rounded-md' value={phone} onChange={e=>setPhone(e.target.value)} />
              <textarea placeholder="Message" className='h-42 p-3 lg:col-span-3 text-black rounded-md' onChange={e=>setMessage(e.target.value)} value={message}></textarea>
            </div>
            <div className="flex gap-4">
                <input type="checkbox" checked={isWhatsApp} name="" onChange={()=>{setIsWhatsApp(!isWhatsApp)}} />
                <label>I want to be contacted on Whats App</label>
            </div>
            <p className="">By clicking on submit, you give Infinium Developers permission to contact you via call &amp; SMS</p>
            <button type='submit' className='primary-btn px-6 py-2 rounded-md' onClick={submitForm}>Submit</button>

          </div>
       {showBG && <div className='w-full relative h-[15px] lg:h-[74px] p-0 m-0'>
          <Image src="/images/building-bg.png" fill={true} className='object-contain' />
        </div>}
      </section>
  )
}

export default QueryForm;