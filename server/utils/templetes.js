const mongoose = require("mongoose");
const blogModel = require("./../model/blogModel");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const DB = process.env.mongodbDatabase.replace(
  "<password>",
  process.env.mongodbPassword
);
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to Db");
  }
);

async function product() {
  try {
    await blogModel.create([
      {
        title: "Corruption",
        summery:
          "Corruption is misuse of public power to benefit a private interest. Corruption is like communicable disease. It kills the constitution, the society and the economy of developing nations.It is a common problem of developing as well as developed countries.",
        first:
          "Corruption is misuse of public power to benefit a private interest. Corruption is like communicable disease. It kills the constitution, the society and the economy of developing nations.",
        second:
          "It is a common problem of developing as well as developed countries. Corruption is found almost everywhere and on everything, starting from paying bribes to civil servants for his favor of work to the leading politicians. Corruption is one of the greatest factors that hinder development of nation. Corruption affects the growth of a nation adversely. It reduces the Government's income, and creates inequalities in distribution of income and wealth. It affects a nation's development, economically, socially and politically.",
        third:
          "The life and future of the nation is secure only when the nation is corruption free. Corruption is destruction and it cannot control unless citizen of country become an active partner to control it.  At last, for the development of the country, it is the duty of every citizen to make joint efforts to free the country from corruption.",
        writtenBy: "Bibek Shrestha",
        photo: "/images/blogImage/corruption.jpg",
      },
      {
        title: "Discipline",
        summery:
          "The word discipline comes from a Latin word disciple which means follower or admirer. In short, we can say that discipline means following of certain rules and regulations.  Discipline is an essential habit for everyone.",
        first:
          "The word discipline comes from a Latin word disciple which means follower or admirer. In short, we can say that discipline means following of certain rules and regulations.  Discipline is an essential habit that everyone should possess as a civilized citizen. Discipline is the backbone of character.",
        second:
          "The success of person depends on how she or he makes proper use of time. A person cannot make full use of time if she/he is not disciplined. Discipline plays a vital role in every phase of our life. It is something that keeps each person in control. Without discipline, nothing great can be achieved in life. \n A person must be trained to observe discipline from his early years. So that a good personality can be acquired in his later life. Without discipline, the life of a person will become dull and inactive. We need discipline in almost everywhere in life. A disciplined person can control and handle the situation of living in a sophisticated way than those who do not.\n In every field discipline plays an important role. The meaning of discipline changes with the stages of life and priority. Not everyone can be disciplined because it requires a lot of hard work and dedication.",
        third:
          "Moreover, In conclusion, we can say that discipline is one of the key elements of anyone’s life. A person can only be successful if she/he strictly lives a healthy and disciplined life. Above all, discipline helps a person to achieve the success that she/he wants in life.",
        writtenBy: "Bibek Shrestha",
        photo: "/images/blogImage/decipline.jpg",
      },
      {
        title: "Education",
        summery:
          "Education is about learning skill and knowledge. It also means helping people to learn how to do things and support them to think about what they learn. It plays an important role in life.  Education makes a nation ideal and beautiful.",
        first:
          "Education is about learning skill and knowledge. It also means helping people to learn how to do things and support them to think about what they learn. It plays an important role in life.  Education makes a nation ideal and beautiful. It gives light into darkness. It is for knowledge and wisdom.",
        second:
          "The importance of education cannot be explained in words. Its importance can be known after gaining the knowledge. Education makes a well-known personality and respects. It creates the ability to take right decisions. It makes man the smartest creature on earth. It empowers humans and gets them ready to face challenges of life efficiently.  It helps a person to take a better and informed decision. This helps increases the success rate of a person in life.\n Many social problems like child marriage, inequality, poverty, unemployment, high population growth rate etc. are cause due to lack of education. We can reduce such social problems with the help of education. Education makes people humble and polite. It creates awareness and expands our vision.",
        third:
          "In conclusion, education makes a better person and teaches various skills. It enhances the individual growth of a person. It brings discipline in life.it also serves as the backbone for the development of nations.",
        writtenBy: "Bibek Shrestha",
        photo: "/images/blogImage/womenEduction.jpg",
      },
      {
        title: "Natural Beauty of Nepal",
        summery:
          "Nepal is a land lock country. It lies in between India and china. It is small in size. It has cover 1,47,181 sq.km. The total area of Nepal covers 0.3 percent of Asia and 0.003 percent of the Earth.",
        first:
          "Nepal is a land lock country. It lies in between India and china. It is small in size. It has cover 1,47,181 sq.km. The total area of Nepal covers 0.3 percent of Asia and 0.003 percent of the Earth.  Nepal is small and a beautiful country but once is not enough.",
        second:
          "Nepal is rich in natural resources. It is physically divided into three geographical regions: Himalayan, Hilly and Terai. We can feel different types of weather and climate in Nepal. The mountains are uniquely popular among mountaineers, trekkers, etc.  It makes it unique from other countries. It experiences all the three major climatic conditions in the world i.e. tropical hot, temperate cool and sub-polar cold. It has many green forests, beautiful waterfalls, snow-capped mountain peaks, fine flora, and fauna, etc. that attracts many tourists to visit Nepal.\n It is rich in biodiversity. It consists of a lot of rare species of plants and animals. It has never-ending long and wide rivers like Koshi, Gandaki, and Karnali. Beautiful and large lakes like Rara, Rupa, Begnas etc. The other attractive and beautiful places of Nepal are Lumbini, Namche Bazaar,  Annapurna Area, Chitwan National Park, Manang, Koshi Tappu Wildlife,  Bardia National Park and so on. ",
        third:
          "Therefore, Nepal is rich in natural resources. Tourism can be the source of income for the country. Governing bodies, social workers as well as every conscious individual should play an important role in preserving and promoting the natural beauty of Nepal.",
        writtenBy: "Bibek Shrestha",
        photo: "/images/blogImage/naturalbeauty.jpg",
      },
      {
        title: "Role of Education to Women in Nepal",
        summery:
          "'If you educate a man, you educate an individual. But if you educate a woman, you educate a nation.' When women are educated, their countries become stronger and more prosperous. Education makes a nation ideal and beautiful.",
        first:
          "'If you educate a man, you educate an individual. But if you educate a woman, you educate a nation.' When women are educated, their countries become stronger and more prosperous. Education makes a nation ideal and beautiful. It makes every citizen ideal and civilized. Education means giving light into darkness. Education is for knowledge and wisdom. ",
        second:
          " Man and women are like the two sides of a coin. Without one, the other cannot exit. Education women can not only give an educated family but can also be helpful in controlling many social evils such as dowry, unemployment, rapid population growth, prostitution etc.\nNowadays, most of the girls from urban areas are going to schools and colleges for better opportunities of higher education. But in the case of rural areas, girls are getting comparatively lower opportunities. It might be because of the early marriage culture and lack of awareness in parents in rural areas. There are many organizations which are continuing their efforts to provide education to females such as RUWON Nepal, Women LEAD Nepal, EDUC-Nepal, etc. ",
        third:
          "Women Education plays an important role in developing country like Nepal. Governing bodies, social workers as well as every conscious individual should play an important role in providing education to women. ",
        writtenBy: "Bibek Shrestha",
        photo: "/images/blogImage/women.jpg",
      },
      {
        title: "Importance of Sports",
        summery:
          "Sports refer to an activity which makes the players healthy and disciplined and develop in their mind a team spirit and sense of tolerance. There is great importance of sports in life. It helps build the character and personality of a person.",
        first:
          "Sports refer to an activity which makes the players healthy and disciplined and develop in their mind a team spirit and sense of tolerance. There is great importance of sports in life. It helps build the character and personality of a person. It has massive positive effect on both the mind and body.",
        second:
          "It is excellent tools to makes the body physically fit and healthy. It strengthens the heart. Regular Sports make the heart stronger. Hence, Sport is an excellent preventive measure against heart disease. This certainly increases the life expectancy of individuals. Furthermore, a healthy heart means a healthy blood-pressure.\nSport is an excellent tool to build self-confidence. Playing Sports increases confidence to talk properly. It improves the skills of communicating with others. Furthermore, the person experiences confidence in sitting, standing, and walking properly. Sports bring discipline in life. It teaches the values of dedication and patience.",
        third:
          "Hence it is as important as education. Everyone must perform at least one Sport activity on a regular basis. It is great when people know about all the benefits of sports. In the same time, authorities should promote sports and games among young people to keep them healthy and fit.",
        writtenBy: "Bibek Shrestha",
        photo: "/images/blogImage/sports.jpg",
      },
      {
        title: "Tourism in Nepal",
        summery:
          "‘Heaven is myth, Nepal is real’. Nepal is rich in natural beauties, resources and wonders. Nepal tourism is highly popular as it has the highest mountain peak of the world, Mt. Everest. Tourism in Nepal is filled with activities.",
        first:
          "‘Heaven is myth, Nepal is real’. Nepal is rich in natural beauties, resources and wonders. Nepal tourism is highly popular as it has the highest mountain peak of the world, Mt. Everest. Tourism in Nepal is filled with activities like trekking, hiking, mountaineering, jungle safari, rafting and so on.",
        second:
          "Tourism plays a significant role in development of Nepal. It has become an important source of income for country. It directly effects on the social, cultural, educational, and economic sectors of the national societies. It brings large amount of income into a local economy in the form of payment for good and services needed by tourists. People get job in the offices belonging to tourism. Thus, it helps to reduce the problem like unemployment and poverty.\n Nepal is multi-ethnic, multi-lingual, multi-cultural and multi-religious country. We all have our own culture, language, values and norms. We can promote our culture, language, values and norms through tourism.  There are many beautiful destination like: Pokhara, Dharan, Kathmandu, Lumbini, Halesi, Pathibhara, Mustang, Janakpur, Annapurna region and so on for tourist to visit in Nepal. So it is also called 'Garden of different flowers'. \n In order to promote the tourism in Nepal, the government has started the ‘Visit Nepal 2020’ campaign with the aim to attract two million tourists in Nepal by the year 2020. For the overall success of this campaign, the Nepal Government separated 5 sectors to equally promote and develop this area. It includes People & Heritage, Nature & Wildlife, Culture Cities& leisure, Religion & Pilgrimage, and lastly Adventure and Outdoor.",
        third:
          "Hence, it is our moral duty to promote tourism in Nepal. It is our duty to make ‘Visit Nepal 2020’ campaign success. The government and citizen should work together to make our country safe and beautiful destination for tourism.",
        writtenBy: "Bibek Shrestha",
        photo: "/images/blogImage/tourism.jpg",
      },
      {
        title: "Election in Nepal",
        summery:
          "Election means process of selection of qualified candidates through the voting of citizen for welfare of the nation. Nepal is a democratic country where time to election takes places. Election takes places in every 5 years in Nepal.",
        first:
          "Election means process of selection of qualified candidates through the voting of citizen for welfare of the nation. Nepal is a democratic country where time to election takes places. Election takes places in every 5 years in Nepal.",
        second:
          "Election is essential process to search out the energetic, dynamic and having development spirit candidates. All the citizens of the nation will give the important vote to make him/her as a guardian of the nation. After win the election the leaders always visit the local people underdeveloped places and try to know the demand of the common people. These all have been done through the demand of the 21st century by the elected people. Election process is very essential in the nation without the election, loktantra can’t be existed and its value wouldn’t be there. Loktantra means the welfare of the people for right nation for the development etc.",
        third:
          "Election is a process to get best candidates by giving our important vote. This is our to give vote to the best candidates to develop the country and make well developed country in the world. So election is most important process to get our country develop. At last we should give our important vote to win the best candidates. ",
        writtenBy: "Karan Rimal",
        photo: "/images/blogImage/election.jpg",
      },
      {
        title: "Being a Girl",
        summery:
          "Everything from the clothes I wore to the toys, I played with contributed me to know, I am a girl. Even now, though I am a young adult, my dreams and aspirations are developed around the gender roles.",
        first:
          "Everything from the clothes I wore to the toys, I played with contributed me to know, I am a girl. Even now, though I am a young adult, my dreams and aspirations are developed around the gender roles. There are several instances in my life where I was taught I am a girl.",
        second:
          "Once, I went out with my friends to visit Janakpur, we were a gang of boys and girls. I was 17 years. After lots of requests, my dad provides me the permission. We were on time there. But while returning, because of some issue, we got late. It was winter so it was dart at 7 O’clock. Then, at home, my mom was fired at me. She scolded me in such a sense that I had done crime. The way she shouted at me hurt my heart that I burst out with tear. I remembered my brother was up to 8 but she didn’t say a word. When I recalled that day to mom, she again shouted telling stop comparing with your brother. He is a boy and girls are not allowed until late night out, haven’t you heard the crimes against girls. I was speechless still me and my sister is not allowed to go out for late night.\n It was 6 o’clock I was returning from training with one of my male friend, Santos. It was dusk. While walking, we were recalling about the day and laughing. Another data, there was a rumor in my society.\nShe was walking with a guy alone in the evening. When I heard that news I was like what shot of rumor is this. Was I wrong? Can’t we girls even walk with boys? When I tried to keep my voice, my sister stopped me telling not to involve in quarrel.",
        third:
          "From young to now, I’m not allowed to wear short shorts just because of so called society. The way they look when we wear shorts are like a great crime. While playing also, we girls get dolls and in case of boys, they are not allowed to play with dolls rather they provide them balls, bat, and says that the things to be played by girls. \n What I don’t like is though there is a saying ‘Boys and Girls are equal’ but some products are there, like kinder joy advertising pink one for girls with excited dolls and blue one for boys with cars and all. We girls can also do this thing what boys can do. Instead of scolding le encourage us to be the one.",
        writtenBy: "Ranjita Shrestha",
        photo: "/images/blogImage/girl.jpg",
      },
      {
        title: "Newari Food:Samagbaji",
        summery:
          "Samajbaji is an authentic traditional dish of Newari community in Nepal. It is considered as a typical dish of the Nepalese people. It is taken as a starter in every festival. This dish has been passed down from many generations.",
        first:
          "Samajbaji is an authentic traditional dish of Newari community in Nepal. It is considered as a typical dish of the Nepalese people. It is taken as a starter in every festival. This dish has been passed down from many generations. It is easy to make and can be stored for a long time. The soamajbaji is also taken during the major festivals of Nepal like Jatra, Dashain, Tihar etc. This dish is served in almost all the activities of Newari people.",
        second:
          "Samaybaji consists of many items on single plate. Thy are chartamari, beaten rice(cheura),   chhwela(Buffalo meat), fried boiled egg, fried soybeans (Bhatmas), spicy potato salad(Aalu-wala), cut ginger (palu), boiled beans with spices (Bodi ko Achar), green leaves(saag) and alcohal. These snacks are not made because of their taste, but for their nutritional advantages as well. Each food has its own importance.\n Chatamari is a type of an appeliza. It resembles pizza. It is prepared from rice flour by making flat bread cooked over heat including meat, eggs, vegetables like tomato, onions, green chilly etc. Because of toppings it taste great. Nowadays, it can be found virtually everywhere in Nepal. Beaten rice(cheyura) is a common snack in Nepal. It is found in any local grocery shop of Nepal. It is crunchy and flattens in shape. Choyella is made from buffalo meat. There are two types of choyella ; Hake chwella and mana chwella. Haku chwella is prepared by grilling the meat while mana chwella is prepared by boiling the meat.\n Eggs and Soybeans are the most important item in Newari food. Egg is first boiled and then fried which gives extra taste. Where soybeans (Bhatmas) is also fried in oil and mixed with little salt, onion, onionleaves fop samaybaji. Aalu-Bhala is made by boiling potato and chopped into quarters after peeling then and marinated with turmeric, cumin and chilly. Ginger is cut into small pieces and mixed with salt and mustard oil. Alcohol is mostly used in Newari Culture. It is homemade rice alcohol which is colorless and has strong flavor, It is mostly made from Barley and Rice. It makes in house by traditional fermentaion process so that is consumed daily.",
        third:
          "Newari food is intensely flavored with a delicious array of spiceies that taste bud rejoiced with every bit. All the dishes served during feast and festivals have symbolic significance. We use palu (cutted ginger) for acidity and gas problem. Bhatmas reduces the risk of heart disease, Mustard oil is used in all food item because it helps in killing germs and soaag (green leaves) are use because it is good source of protein. Food is the integral part of Newari Culture. Different kinds of foods are prepared for different occasions, considering the climate and nutritional needs for body.",
        writtenBy: "Ranjita Shrestha",
        photo: "/images/blogImage/samayabaji.jpg",
      },
    ]);
 
  } catch (error) {
    console.log(error);
  }
}

product();
