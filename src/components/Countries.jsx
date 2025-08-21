import React from 'react'
import Country from './Country';
import profileImage from "../assets/africa.webp"
import profileImageName from "../assets/profileImage.jpg"
const Countries = () => {
///countries data found here as abjects
const countriesData = [
  { name: "Algeria", code: "DZ", currency: "Algerian Dinar (DZD)", flag: "https://flagcdn.com/w320/dz.png", location: "North Africa, bordered by Tunisia, Libya, Niger, Mali, Mauritania, Western Sahara, Morocco, and the Mediterranean Sea" },
  { name: "Angola", code: "AO", currency: "Angolan Kwanza (AOA)", flag: "https://flagcdn.com/w320/ao.png", location: "Southern Africa, bordered by Namibia, Zambia, the Democratic Republic of the Congo, and the Atlantic Ocean" },
  { name: "Benin", code: "BJ", currency: "West African CFA franc (XOF)", flag: "https://flagcdn.com/w320/bj.png", location: "West Africa, bordered by Togo, Nigeria, Burkina Faso, Niger, and the Atlantic Ocean" },
  { name: "Botswana", code: "BW", currency: "Botswana Pula (BWP)", flag: "https://flagcdn.com/w320/bw.png", location: "Southern Africa, bordered by Namibia, South Africa, Zimbabwe, and Zambia" },
  { name: "Burkina Faso", code: "BF", currency: "West African CFA franc (XOF)", flag: "https://flagcdn.com/w320/bf.png", location: "West Africa, bordered by Mali, Niger, Benin, Togo, Ghana, and Côte d’Ivoire" },
  { name: "Burundi", code: "BI", currency: "Burundian Franc (BIF)", flag: "https://flagcdn.com/w320/bi.png", location: "East-Central Africa, bordered by Rwanda, Tanzania, and the Democratic Republic of the Congo" },
  { name: "Cabo Verde", code: "CV", currency: "Cape Verdean Escudo (CVE)", flag: "https://flagcdn.com/w320/cv.png", location: "Island nation in the central Atlantic Ocean, off the coast of West Africa" },
  { name: "Cameroon", code: "CM", currency: "Central African CFA franc (XAF)", flag: "https://flagcdn.com/w320/cm.png", location: "Central Africa, bordered by Nigeria, Chad, Central African Republic, Equatorial Guinea, Gabon, Congo, and the Atlantic Ocean" },
  { name: "Central African Republic", code: "CF", currency: "Central African CFA franc (XAF)", flag: "https://flagcdn.com/w320/cf.png", location: "Landlocked country in Central Africa, bordered by Chad, Sudan, South Sudan, Democratic Republic of the Congo, Republic of the Congo, and Cameroon" },
  { name: "Chad", code: "TD", currency: "Central African CFA franc (XAF)", flag: "https://flagcdn.com/w320/td.png", location: "North-Central Africa, bordered by Libya, Sudan, Central African Republic, Cameroon, Nigeria, and Niger" },
  { name: "Comoros", code: "KM", currency: "Comorian Franc (KMF)", flag: "https://flagcdn.com/w320/km.png", location: "Island nation in the Indian Ocean, between Madagascar and the coast of Mozambique" },
  { name: "Congo (Republic of)", code: "CG", currency: "Central African CFA franc (XAF)", flag: "https://flagcdn.com/w320/cg.png", location: "Central Africa, bordered by Gabon, Cameroon, Central African Republic, Democratic Republic of the Congo, Angola (Cabinda), and the Atlantic Ocean" },
  { name: "Congo (Democratic Republic)", code: "CD", currency: "Congolese Franc (CDF)", flag: "https://flagcdn.com/w320/cd.png", location: "Central Africa, bordered by Republic of the Congo, Central African Republic, South Sudan, Uganda, Rwanda, Burundi, Tanzania, Zambia, Angola, and the Atlantic Ocean" },
  { name: "Djibouti", code: "DJ", currency: "Djiboutian Franc (DJF)", flag: "https://flagcdn.com/w320/dj.png", location: "Horn of Africa, bordered by Eritrea, Ethiopia, Somalia, and the Red Sea" },
  { name: "Egypt", code: "EG", currency: "Egyptian Pound (EGP)", flag: "https://flagcdn.com/w320/eg.png", location: "Northeastern Africa, bordered by Libya, Sudan, Israel, Gaza Strip, and the Mediterranean & Red Seas" },
  { name: "Equatorial Guinea", code: "GQ", currency: "Central African CFA franc (XAF)", flag: "https://flagcdn.com/w320/gq.png", location: "Central Africa, bordered by Cameroon, Gabon, and the Atlantic Ocean" },
  { name: "Eritrea", code: "ER", currency: "Eritrean Nakfa (ERN)", flag: "https://flagcdn.com/w320/er.png", location: "Horn of Africa, bordered by Sudan, Ethiopia, Djibouti, and the Red Sea" },
  { name: "Eswatini", code: "SZ", currency: "Swazi Lilangeni (SZL)", flag: "https://flagcdn.com/w320/sz.png", location: "Southern Africa, bordered by South Africa and Mozambique" },
  { name: "Ethiopia", code: "ET", currency: "Ethiopian Birr (ETB)", flag: "https://flagcdn.com/w320/et.png", location: "Horn of Africa, bordered by Eritrea, Djibouti, Somalia, Kenya, South Sudan, and Sudan" },
  { name: "Gabon", code: "GA", currency: "Central African CFA franc (XAF)", flag: "https://flagcdn.com/w320/ga.png", location: "Central Africa, bordered by Equatorial Guinea, Cameroon, Republic of the Congo, and the Atlantic Ocean" },
  { name: "Gambia", code: "GM", currency: "Gambian Dalasi (GMD)", flag: "https://flagcdn.com/w320/gm.png", location: "West Africa, almost entirely surrounded by Senegal except for its coastline along the Atlantic Ocean" },
  { name: "Ghana", code: "GH", currency: "Ghanaian Cedi (GHS)", flag: "https://flagcdn.com/w320/gh.png", location: "West Africa, bordered by Côte d’Ivoire, Burkina Faso, Togo, and the Atlantic Ocean" },
  { name: "Guinea", code: "GN", currency: "Guinean Franc (GNF)", flag: "https://flagcdn.com/w320/gn.png", location: "West Africa, bordered by Guinea-Bissau, Senegal, Mali, Côte d’Ivoire, Liberia, Sierra Leone, and the Atlantic Ocean" },
  { name: "Guinea-Bissau", code: "GW", currency: "West African CFA franc (XOF)", flag: "https://flagcdn.com/w320/gw.png", location: "West Africa, bordered by Senegal, Guinea, and the Atlantic Ocean" },
  { name: "Ivory Coast (Côte d’Ivoire)", code: "CI", currency: "West African CFA franc (XOF)", flag: "https://flagcdn.com/w320/ci.png", location: "West Africa, bordered by Liberia, Guinea, Mali, Burkina Faso, Ghana, and the Atlantic Ocean" },
  { name: "Kenya", code: "KE", currency: "Kenyan Shilling (KES)", flag: "https://flagcdn.com/w320/ke.png", location: "East Africa, bordered by Somalia, Ethiopia, South Sudan, Uganda, Tanzania, and the Indian Ocean" },
  { name: "Lesotho", code: "LS", currency: "Lesotho Loti (LSL)", flag: "https://flagcdn.com/w320/ls.png", location: "Landlocked country entirely surrounded by South Africa" },
  { name: "Liberia", code: "LR", currency: "Liberian Dollar (LRD)", flag: "https://flagcdn.com/w320/lr.png", location: "West Africa, bordered by Sierra Leone, Guinea, Côte d’Ivoire, and the Atlantic Ocean" },
  { name: "Libya", code: "LY", currency: "Libyan Dinar (LYD)", flag: "https://flagcdn.com/w320/ly.png", location: "North Africa, bordered by Egypt, Sudan, Chad, Niger, Algeria, Tunisia, and the Mediterranean Sea" },
  { name: "Madagascar", code: "MG", currency: "Malagasy Ariary (MGA)", flag: "https://flagcdn.com/w320/mg.png", location: "Island nation in the Indian Ocean, off the southeastern coast of Africa" },
  { name: "Malawi", code: "MW", currency: "Malawian Kwacha (MWK)", flag: "https://flagcdn.com/w320/mw.png", location: "Southeastern Africa, bordered by Tanzania, Mozambique, and Zambia" },
  { name: "Mali", code: "ML", currency: "West African CFA franc (XOF)", flag: "https://flagcdn.com/w320/ml.png", location: "West Africa, bordered by Algeria, Niger, Burkina Faso, Côte d’Ivoire, Guinea, Senegal, and Mauritania" },
  { name: "Mauritania", code: "MR", currency: "Mauritanian Ouguiya (MRU)", flag: "https://flagcdn.com/w320/mr.png", location: "Northwest Africa, bordered by Western Sahara, Algeria, Mali, Senegal, and the Atlantic Ocean" },
  { name: "Mauritius", code: "MU", currency: "Mauritian Rupee (MUR)", flag: "https://flagcdn.com/w320/mu.png", location: "Island nation in the Indian Ocean, east of Madagascar" },
  { name: "Morocco", code: "MA", currency: "Moroccan Dirham (MAD)", flag: "https://flagcdn.com/w320/ma.png", location: "North Africa, bordered by Western Sahara, Algeria, and the Mediterranean Sea & Atlantic Ocean" },
  { name: "Mozambique", code: "MZ", currency: "Mozambican Metical (MZN)", flag: "https://flagcdn.com/w320/mz.png", location: "Southeastern Africa, bordered by Tanzania, Malawi, Zambia, Zimbabwe, South Africa, Eswatini, and the Indian Ocean" },
  { name: "Namibia", code: "NA", currency: "Namibian Dollar (NAD)", flag: "https://flagcdn.com/w320/na.png", location: "Southern Africa, bordered by Angola, Zambia, Botswana, South Africa, and the Atlantic Ocean" },
  { name: "Niger", code: "NE", currency: "West African CFA franc (XOF)", flag: "https://flagcdn.com/w320/ne.png", location: "West Africa, bordered by Algeria, Libya, Chad, Nigeria, Benin, Burkina Faso, and Mali" },
  { name: "Nigeria", code: "NG", currency: "Nigerian Naira (NGN)", flag: "https://flagcdn.com/w320/ng.png", location: "West Africa, bordered by Benin, Niger, Chad, Cameroon, and the Atlantic Ocean" },
  { name: "Rwanda", code: "RW", currency: "Rwandan Franc (RWF)", flag: "https://flagcdn.com/w320/rw.png", location: "East-Central Africa, bordered by Uganda, Tanzania, Burundi, and Democratic Republic of the Congo" },
  { name: "São Tomé and Príncipe", code: "ST", currency: "São Tomé and Príncipe Dobra (STN)", flag: "https://flagcdn.com/w320/st.png", location: "Island nation in the Gulf of Guinea, off the coast of Central Africa" },
  { name: "Senegal", code: "SN", currency: "West African CFA franc (XOF)", flag: "https://flagcdn.com/w320/sn.png", location: "West Africa, bordered by Mauritania, Mali, Guinea, Guinea-Bissau, and the Atlantic Ocean" },
  { name: "Seychelles", code: "SC", currency: "Seychellois Rupee (SCR)", flag: "https://flagcdn.com/w320/sc.png", location: "Island nation in the Indian Ocean, northeast of Madagascar" },
  { name: "Sierra Leone", code: "SL", currency: "Sierra Leonean Leone (SLL)", flag: "https://flagcdn.com/w320/sl.png", location: "West Africa, bordered by Guinea, Liberia, and the Atlantic Ocean" },
  { name: "Somalia", code: "SO", currency: "Somali Shilling (SOS)", flag: "https://flagcdn.com/w320/so.png", location: "Horn of Africa, bordered by Djibouti, Ethiopia, Kenya, and the Indian Ocean" },
  { name: "South Africa", code: "ZA", currency: "South African Rand (ZAR)", flag: "https://flagcdn.com/w320/za.png", location: "Southern Africa, bordered by Namibia, Botswana, Zimbabwe, Mozambique, Eswatini, Lesotho, and the Atlantic & Indian Oceans" },
  { name: "South Sudan", code: "SS", currency: "South Sudanese Pound (SSP)", flag: "https://flagcdn.com/w320/ss.png", location: "East-Central Africa, bordered by Sudan, Ethiopia, Kenya, Uganda, Democratic Republic of the Congo, and Central African Republic" },
  { name: "Sudan", code: "SD", currency: "Sudanese Pound (SDG)", flag: "https://flagcdn.com/w320/sd.png", location: "Northeastern Africa, bordered by Egypt, Libya, Chad, Central African Republic, South Sudan, Ethiopia, and Eritrea" },
  { name: "Tanzania", code: "TZ", currency: "Tanzanian Shilling (TZS)", flag: "https://flagcdn.com/w320/tz.png", location: "East Africa, bordered by Kenya, Uganda, Rwanda, Burundi, Democratic Republic of the Congo, Zambia, Malawi, Mozambique, and the Indian Ocean" },
  { name: "Togo", code: "TG", currency: "West African CFA franc (XOF)", flag: "https://flagcdn.com/w320/tg.png", location: "West Africa, bordered by Ghana, Benin, Burkina Faso, and the Atlantic Ocean" },
  { name: "Tunisia", code: "TN", currency: "Tunisian Dinar (TND)", flag: "https://flagcdn.com/w320/tn.png", location: "North Africa, bordered by Algeria, Libya, and the Mediterranean Sea" },
  { name: "Uganda", code: "UG", currency: "Ugandan Shilling (UGX)", flag: "https://flagcdn.com/w320/ug.png", location: "East Africa, bordered by South Sudan, Kenya, Tanzania, Rwanda, and Democratic Republic of the Congo" },
  { name: "Zambia", code: "ZM", currency: "Zambian Kwacha (ZMW)", flag: "https://flagcdn.com/w320/zm.png", location: "Southern Africa, bordered by Democratic Republic of the Congo, Tanzania, Malawi, Mozambique, Zimbabwe, Botswana, Namibia, and Angola" },
  { name: "Zimbabwe", code: "ZW", currency: "Zimbabwean Dollar (ZWL)", flag: "https://flagcdn.com/w320/zw.png", location: "Southern Africa, bordered by Zambia, Mozambique, South Africa, and Botswana" }
];



  return (
    <div className='bg-fuchsia-200'>
   
    <div className='container mx-auto px-4 '>
      <div className="py-4 flex ">
  <div className="p-1 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500">
    <img
      src={profileImage}
      alt="Profile"
      className="w-[150px] h-[150px] rounded-full border-4 border-white shadow-md"
    />
    <h1 className="absolute right-4 top-6 px-4 py-1 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-md">
  Developed by : Abdirahman Kuredow(CK)
</h1>
<img
  src={profileImageName}
  alt="Profile"
  className="w-[120px] h-[120px] rounded-full ring-4 ring-blue-500  border-4 border-white  shadow-lg absolute top-18 right-24"
/>


  </div>
</div>

        <h1 className='text-5xl font-extrabold  italic justify-center text-center '>All <span className='text-red-500 text-5xl font-extrabold italic'>African</span>   <span className='text-green-500 text-5xl font-extrabold italic'>Countries</span></h1>
        <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
            countriesData.map((country,index)=>(
    
               <Country key={index} country={country}/>
            ))
        }
        </div>
    </div>
    </div>
  )
}

export default Countries