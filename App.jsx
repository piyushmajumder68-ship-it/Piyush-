import React, { useState, useEffect, useRef } from 'react';

const STRINGS = {
  en: {
    welcome: 'Welcome',
    studyPlanner: 'Study Planner',
    englishLab: 'English Lab',
    mockTests: 'Mock Tests',
    profile: 'Profile',
    save: 'Save',
    targetDate: 'Target exam date',
    studyHours: 'Study hours / day',
    play: 'Play',
    record: 'Record',
    stop: 'Stop',
    spellingDrill: 'Spelling Drill',
    writingPractice: 'Writing Practice',
  },
  bn: {
    welcome: 'স্বাগতম',
    studyPlanner: 'স্টাডি প্ল্যানার',
    englishLab: 'ইংরেজি ল্যাব',
    mockTests: 'মক টেস্ট',
    profile: 'প্রোফাইল',
    save: 'সেভ করুন',
    targetDate: 'টার্গেট পরীক্ষা তারিখ',
    studyHours: 'প্রতিদিন অধ্যয়নের সময়',
    play: 'প্লে',
    record: 'রেকর্ড',
    stop: 'বন্ধ করুন',
    spellingDrill: 'সপেলিং ড্রিল',
    writingPractice: 'লেখার অনুশীলন',
  }
};

export default function App(){
  const [lang, setLang] = useState('en');
  const t = STRINGS[lang];

  const [name, setName] = useState(() => localStorage.getItem('name') || '');
  const [targetDate, setTargetDate] = useState(() => localStorage.getItem('targetDate') || '');
  const [studyHoursPerDay, setStudyHoursPerDay] = useState(() => +localStorage.getItem('studyHoursPerDay') || 3);
  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('targetDate', targetDate);
    localStorage.setItem('studyHoursPerDay', String(studyHoursPerDay));
  }, [name, targetDate, studyHoursPerDay]);

  const [route, setRoute] = useState('home');

  // Spelling drill small
  const words = ['receive','separate','accommodate','pronunciation','occasion'];
  const [i, setI] = useState(0);
  const [input, setInput] = useState('');
  const [msg, setMsg] = useState('');

  function check(){
    if(input.trim().toLowerCase()===words[i]){
      setMsg('✅ Correct');
      setTimeout(()=>{ setI((i+1)%words.length); setInput(''); setMsg(''); },700);
    } else {
      setMsg('❌ Try again');
    }
  }

  // Speech synthesis
  const speak = (text) => {
    if(!('speechSynthesis' in window)) return alert('No speech support');
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  return (
    <div className="container">
      <div className="header card">
        <div>
          <h1>Ca Topper</h1>
          <div style={{fontSize:13}}>Bengali + English — CA Intermediate</div>
        </div>
        <div>
          <select value={lang} onChange={e=>setLang(e.target.value)} className="input" style={{marginRight:8}}>
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
          </select>
          <button className="button" onClick={()=>setRoute('home')}>Home</button>
          <button className="button" style={{marginLeft:8}} onClick={()=>setRoute('english')}>{t.englishLab}</button>
        </div>
      </div>

      {route==='home' && (
        <div className="card">
          <h2>{t.welcome} {name || 'Student'}</h2>
          <div style={{display:'flex',gap:12,marginTop:12}}>
            <div style={{flex:1}}>
              <div style={{marginBottom:8,fontWeight:600}}>{t.profile}</div>
              <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} style={{width:'100%',marginBottom:8}}/>
              <label>{t.targetDate}</label><br/>
              <input type="date" className="input" value={targetDate} onChange={e=>setTargetDate(e.target.value)} style={{width:'100%',marginBottom:8}}/>
              <label>{t.studyHours}</label><br/>
              <input type="number" min={1} max={12} className="input" value={studyHoursPerDay} onChange={e=>setStudyHoursPerDay(+e.target.value)} style={{width:'100%',marginBottom:8}}/>
              <button className="button" onClick={()=>alert('Saved')}>{t.save}</button>
            </div>
            <div style={{flex:1}}>
              <h3>Quick Tips</h3>
              <ul>
                <li>Read theory + solve 10 practice Qs</li>
                <li>Practice English 20 mins daily</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {route==='english' && (
        <div className="card">
          <h2>{t.spellingDrill}</h2>
          <div style={{marginTop:8}}>
            <div style={{fontWeight:600}}>Word #{i+1}</div>
            <input className="input" value={input} onChange={e=>setInput(e.target.value)} placeholder="Type spelling" style={{width:'100%',marginTop:6}}/>
            <div style={{marginTop:8}}>
              <button className="button" onClick={check}>Check</button>
              <button className="button" style={{marginLeft:8}} onClick={()=>speak(words[i])}>{t.play}</button>
            </div>
            <div style={{marginTop:8}}>{msg}</div>
          </div>

          <hr style={{margin:'16px 0'}}/>
          <h3>{t.writingPractice}</h3>
          <textarea className="input" style={{width:'100%',height:120}} placeholder="Write a short paragraph..."></textarea>
          <div style={{marginTop:8}}>
            <button className="button" onClick={()=>speak('Good job! Keep practicing.')}>Hear encouragement</button>
          </div>
        </div>
      )}

      <footer style={{textAlign:'center',marginTop:20,fontSize:13,color:'#4a5568'}}>Built for Bengali CA students • Ca Topper</footer>
    </div>
  );
}
