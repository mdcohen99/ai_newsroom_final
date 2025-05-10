document.getElementById('searchBox').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.obituary-card');
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });

  document.getElementById('searchBox').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.obituary-card');
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });

  document.querySelectorAll('.obituary-card').forEach(card => {
    card.addEventListener('click', function() {
      const fullTextId = this.querySelector('h2').textContent.replace(/\s+/g, '-').toLowerCase();
      const existingText = document.getElementById(fullTextId + '-full');

      if (existingText) {
        existingText.remove();
      } else {
        const fullText = document.createElement('div');
        fullText.id = fullTextId + '-full';
        fullText.classList.add('full-obituary-text');

        let textContent = '';
        switch (fullTextId) {
          case 'robert-daniel-(dan)-beaty':
            textContent = `At age 90, Dan went to be with the Lord on Wednesday, May 7, 2025. 

Dan was born in Montgomery, Alabama. In his childhood, Dan lived in Montgomery, Auburn, and then Birmingham. He attended Ramsey High School. While at Ramsey, Dan was Sports Editor of the Highlander, the school's newspaper, a senior class officer, and a letterman on the football team. 

Dan earned a BS degree at Auburn University in Business Administration in 1957. While at Auburn, Dan was active in Pi Kappa Alpha social fraternity and the Baptist Student Union. He was a member of the business honorary Delta Sigma Pi and was Business Manager of "The Plainsman", the school's newspaper. He was an officer in ODK honorary, and he was selected to serve in the Spades Honorary his senior year. He was a life member of the Auburn Alumni Association. Dan completed his military service by serving in the Alabama National Guard for eight years. 

He retired from BellSouth as an Operations Manager after 33 years of service. While working in the Bell System, Dan and his family lived in Birmingham, Gadsden, Tuscaloosa, and Decatur, Alabama, and Berkeley Heights, New Jersey. 

Upon retirement, Dan dedicated himself to his community in many meaningful ways. He took on leadership roles as Executive Director of both the Birmingham Construction Industry Authority (BCIA) and the American Subcontractors Association (ASA). At Dawson Memorial Baptist Church in Homewood, AL, he was deeply involved-holding positions such as Chairman of the Board of Deacons and the Finance Committee, teaching Bible classes, and directing a Senior Adult Sunday School Department. 

A devoted member of the Vestavia Hills Rotary Club for over 25 years, Dan also contributed as the club's Administrator for more than two decades. He helped launch M/POWER Ministries and gave his time as a Literacy Teacher and GED Mentor, supporting others in their personal growth. 

Outside of his community work, Dan found great joy in spending time with his grandchildren, rooting for the Auburn Tigers, reading, birdwatching, cultivating roses, and traveling the world with his beloved wife, Gem. 

He is preceded in death by his parents James Albert Beaty, Maude Fuqua Beaty; and his brother James Albert Beaty, Jr. 

He is survived by his beloved wife Jimmie (Gem) Martin Beaty of 66 years; and daughters Miriam Vinson (Keith), Suzanne Bonovitch (Lance); and grandchildren, Jennifer Craft (Lee) and Caroline Eldridge (Caleb), Patrick Bonovitch (Ashley) and Ashleigh Tilford (Tyler). He currently has eight great-grandchildren. 

A memorial service celebrating Dan's life will be held at Dawson Memorial Baptist Church on May 19, 2025. Visitation will begin at 10 a.m. with the Celebration of Life Service following at 11 a.m. 

Memorials may be made to M/POWER Ministries, 4022 4th Avenue South, Birmingham, Alabama 35222 or to Faithful Together, Dawson Memorial Baptist Church, 1114 Oxmoor Road, Homewood, Alabama 35209.
`;
            break;
          case 'robert-emory-gillespie,-jr.':
            textContent = `Robert Emory Gillespie, Jr., age 56, passed away Monday, May 5, 2025. Robert was born May 13, 1968 in Birmingham, AL and grew up in Montgomery, AL. He attended Jefferson Davis High School, class of 1986, and Huntingdon College on an academic and baseball scholarship. He graduated with a Bachelor of Science in Chemistry. Robert started his career in chemical sales with Buckman Laboratories in St. Mary's, GA. He later returned to Birmingham working in medical sales with numerous companies through the years. Some of his most enjoyable positions were National Director of Business Development at Atherotec, Inc; Director of Sales at Esoterix, Inc and Regional Transplant Manager at Europhins, Transplant Genomics, Inc. 
Robert had a personality that filled the room. His booming voice and contagious demeanor let you know he was ready to lift-up a kid with two strikes on his back in a tie ball game. He was an excellent athlete playing high school football, basketball, and baseball, continuing his baseball career into college, but most of all he enjoyed coaching his son's little league and travel baseball teams. His ability to disarm with humor, matched by his unyielding protection of the dignity of his players, WAS the magic of Robert Gillespie. He could not have been prouder of Rob's many accomplishments on and off the field and loved watching him excel in baseball and football for Mountain Brook High School. Robert was given "A Promise to Help Servants Award" for his charitable contributions through the years with the Spirit of Luke Charitable Foundation - a worthy organization founded by Dr. Sandra and Henry Ford which provides free healthcare and social services to underserved communities in Alabama's Black Belt. Robert had a genuine love of music, with an extensive playlist from the '70s and '80s. He knew every artist and every lyric and shared that enthusiasm for music with his friends and family, who he loved very much. 
Robert was preceded in death by his father, Robert Emory Gillespie, Sr. He is survived by Natalie Tortorici Gillespie and son Robert "Rob" Emory Gillespie III; mother Marilyn Motlow Gillespie; sister Evelyn Gillespie Smith (Ted), many nephews, cousins, relatives, and supportive friends. 
Memorial service will be Tuesday, May 13th on his birthday at Canterbury United Methodist Church, 350 Overbrook Road, Mountain Brook, AL 35213. Visitation 1:30 p.m., with service at 2:30 p.m. In lieu of flowers, please consider making a donation to the Spirit of Luke Charitable Foundation A Promise to Help, 516 Tuscaloosa Ave SW, Birmingham, AL 35211. apromisetohelp.com.
`;
            break;
          case 'dr.-jack-walden-trigg,-jr.':
            textContent = `Dr. Jack Walden Trigg, Jr. died peacefully at home on May 7, 2025, just three weeks after celebrating his 93rd birthday. 
Jack was born on April 18, 1932 in Birmingham, Alabama, the son of Jack Walden Trigg and Florine Hagood Trigg. He attended Ramsey High School, graduating in 1949. He then traveled to Virginia to attend Virginia Military Institute, from which he graduated in 1953 with a B. S. in Chemistry. Jack proceeded to earn his medical degree at the Medical College of Alabama (now UAB) and subsequently interned at Duke Hospital. He had one year of fellowship in cardiology and completed a residency program in Internal Medicine at UAB. He then served his country as a Captain in the United States Air Force at Eglin AFB for a two-year period. In 1964 he entered the private practice of Internal Medicine in association with Drs. Bert Wiesel, James A. Davis, and Bayard Tynes at St. Vincent's Hospital, where he remained until his retirement in 1998. The group became known as Southside Internists Group, P. C. and later merged with Lakeview Medical Group in 1994 to form Southview Medical Group, P. C. Dr. Trigg served as president of his medical practice from 1987 through 1995. He was also president of the Medical Staff at St. Vincent's Hospital in 1986. He was a meticulous, knowledgeable, and compassionate doctor, and for the decades following his retirement, it was not unusual for former patients – and family of former patients – to approach him at restaurants to recount fond memories of the gentle care they had received under his watch. 

During Jack's studies at UAB, he was smitten by a young volunteer named Dorothy Wynne – better known by her nickname "Peachy" - who would become his wife on June 3, 1957. They had two sons: John and James. John tragically died in a July 1973 swimming accident. Despite their considerable heartbreak, Jack and Peachy gathered the pieces and forged ahead with their lives. As James grew up, Jack attended every little league baseball, football, and basketball game, and routinely offered his services as an assistant coach and team doctor. He relished family time, and loved beach vacations and visits to major cities around the country, where he explored restaurants, museums, and historical sites with enthusiasm and vigor. He also adored the sport of golf, participating in two "Dogfights" at the Birmingham Country Club (the Rollers and the Gravy Train). Notwithstanding his busy professional and family demands, he rarely missed an opportunity to play 18 holes every Friday. Always understated and rarely showy, he nonetheless possessed a sly wit and dry sense of humor that could always bring a smile to his family and friends. 

Jack's wife Peachy suffered from early-onset Alzheimer's and during the time of her illness, he was a doting and devoted caretaker. Peachy passed away in October 2016, after a long battle with the disease. In Jack's later years, he was fortunate to find comfort and companionship with Elizabeth Hoffman ("Lizbet"), who was a loyal friend and partner to him up until the time of his passing. Jack's and Lizbet's families grew close in those final years, routinely celebrating holidays and special occasions together, one of which was a 93rd birthday party for Jack and Lizbet held just three weeks ago and attended by many friends and family members. 

He proudly served on the Board of the UAB School of Nursing for many years, and was a dedicated supporter of the nursing profession. Jack was a member of the American Board of Internal Medicine and Fellow of the American College of Physicians. He belonged to the Jefferson County Medical Society, Birmingham Society of Internists, Medical Association of the State of Alabama, the American Medical Association, and the Southeastern Clinical Club (a travel group). He was a member of St. Luke's Episcopal Church, the Birmingham Country Club, and Birmingham Rotary Club. 

Jack is survived by his son James, daughter-in-law Aruna Sharma; grandson Julian (the apple of his eye); and companion Lizbet. A celebration of his life will be held Friday, May 16, 2025 at St. Luke's Episcopal Church, 3736 Montrose Road, Birmingham, AL 35213, with a visitation beginning at 10 a.m., followed by a service at 11 a.m. Contributions in his memory can be sent to the UAB School of Nursing (https://www.uab.edu/nursing/home/), St. Luke's Episcopal Church (https://saint-lukes.com/), or Virginia Military Institute (https://www.vmi.edu/).
`;
            break;
          case 'katherine-lyn-twilley':
            textContent = `Katherine Lyn Twilley, 56, of Vestavia Hills passed away peacefully Wednesday, April 30, 2025. She was an accomplished financial professional, athlete and proud member of Alpha XI Delta at Auburn University. Her passions were family, pets, and all things related to Auburn sports. She was the daughter of Glenn Mason Twilley and the late Katherine Savage Twilley. She is survived by her father and brother Howell Glenn Twilley. A Celebration Service will be held at 1:30 p.m. Tuesday, May 20th at the Vestavia Hills United Methodist Church chapel with Rev. James W. Frazier presiding. All are welcome to the chapel narthex from 1-1:30 p.m. prior to the service. Memorial contributions may be made to St. Jude’s in her name. Sunflowers and yellow roses were her favorite which symbolize joy.`;
            break;
          case 'harriet-adolphus-conyers':
            textContent = `Harriet Adolphus Conyers of Vestavia Hills, AL passed away at the age of 86. She was preceded in death by her parents Joseph Clyde Adolphus and Hattie Brown Harris Adolphus; and her daughter, Lorena Conyers Webster. She is survived by her husband of almost 66 years, Arthur Charles Conyers, Jr; daughter Katherine Conyers Manush (Stan); grandsons, Charles "Chip" Manush (Sara), David Manush (Jayne), Conyers Webster, Chatfield Webster and Andrew Manush (Hannah), The funeral will be held Saturday, May 10, 2025 at 2 p.m. at The Church of the Ascension in Vestavia Hills with interment to follow and a reception afterwards. In lieu of flowers, please consider making a donation to The Church of the Ascension Memorial Garden 1912 Canyon Rd, Vestavia Hills 35215 in her memory.`;
            break;
          case 'mamie-c.-flynn':
            textContent = `Mamie C. Flynn, age 91, of Trussville, Alabama passed away on Friday, May 2, 2025. She was preceded in death by her beloved son, Jeffrey Brian Flynn; and husband of over 70 years, Gordon Lee Flynn. She was loved by her community, while being active in many different clubs in Trussville, as well as a member of Trussville First Baptist Church. Her love for God and her family surpassed all things. She is survived by her daughters; Martha Jane Buck (Frank), Leslie Colleen Camp (Rodney); her grandchildren; Rachel Buck Flowers (Bill), Whitney Lynn Camp Lugo (Troy), Ashley Marie Buck, Kerri Buck Stephen (Doug), Lindsey Camp Phyfer (Robert); and her great grandchildren; Gabby Catherine Flowers, Alli Flynn Stephen, Evva Reese Stephen, Raleigh Flynn Lugo, Lucy Jane Mary Flowers, Cason Camp Lugo, Zack Frank Buck Flowers, Jack Thomas Stephen, Lawson Duke Lugo, Thomas Miller Phyfer. 

A visitation for Mamie will be held Saturday, May 10, 2025 from 10 to 11 a.m. at Ridout's Trussville Chapel, 1500 Gadsden Hwy, Birmingham, AL 35235. Following the visitation will be a brief service at 11 a.m. at Ridout's Trussville Chapel.
`;
            break;
          case 'truman-nelson-robinson':
            textContent = `It is with profound love and heart felt gratitude that we celebrate the life and legacy of Truman Nelson Robinson. On Jan. 12, 1950, Truman Nelson Robinson was born to Mary Robinson Moore and Willie Williams. He began his life's journey in Bessemer Alabama. 

He attended Red Ore Elementary and graduated from Wenonah High School, Class of 1968. He served his community with honor and dedication as a Deputy Sheriff with Jefferson County Sheriff's Department for 26 years. 

He confessed his magnificent belief in Christ at an early age at Old St. Paul Baptist under Rev. J.F. Bryant. He was a faithful member until his health failed. His passion was singing, where he was in numerous singing groups and the Church Choir. 

Truman was known to be a hard worker with specific goals in life. He was known for his blunt outspoken fatherly advice to family and friends. His children and grandkids were the light of his life. 

He was preceded in death by his caring mother, Mary Moore; stepfather Booker T. Moore Sr.; nurturing grandmothers, Catherine Lavender Vaughns and Bertha Mae Miller; generous grandfather, Pierce Robinson; affectionate sisters, Brenda Blount and Sandra Houie; brother, Booker T. Moore Jr.; a son, Patrick; 7 resilient uncles and 7 beautiful aunts. 

On Friday May 02, 2025, after listening and singing to James Cleveland "Lord Help Me to Hold Out", at 12:01 am, Truman ascended to be with his heavenly father for eternal life. Those he left behind to cherish his precious memories are wife (soul mate) of 53 years, Brenda Robinson; to carry on his legacy, two loving daughters, Arlesa Robinson Butler (Nathan) and Trumella Roy (Jarrid); special son, Darron Oden; devoted grandchildren, Kerry Truman Holmes, Kayla Brianna Robinson (Quentin Griffin), Trenton Robinson and Ashely Boyd; special grandchild, Maj Mayes; great grandchildren, Krishunna, Aiden, Jaiden, Keshawn, Zariah and Kherri. He was very proud of his surviving sibling's: sisters, Faye Young and Catherine Moore; brother, Pierce Moore (Anita), brothers-in-law, Maurice Lindsey (Angela) and Carlos Mayfield; loyal aunts, Sarah Robinson and Pauline Powell; uncle, Curtis Kennedy (Ann) of Los Angeles, California and numerous loving nieces, nephews, cousins, friends and extended family. 

Life Celebration is 2:00 Friday, May 9, 2025, at Old St. Paul Baptist Church, 3231 Long Avenue D, Bessemer 35020. Pastor Jeffery Alexander, Celebrant. Mr. Robinson will Lie in State at the church from 1:00 until 2:00. Inhumation follows at Highland Memorial Gardens. Calling Hours at Johnson Memorial, Bessemer, Thursday from Noon until 8:00 with Family Visitation from 4:00 until 6:00.
`;
            break;
          case 'kathy-jean-courington':
            textContent = `Kathy Jean Courington, 68 years old of Birmingham, AL, went to be with the Lord on May 3, 2025, surrounded by family. She was a kind and thoughtful person and will be missed and remembered by the many lives she touched. Born on April 27, 1957, in Jasper, AL, Kathy attended Thatch School in Manchester, AL, where she was a basketball cheerleader and enjoyed learning. She earned an associate's degree at UAB Walker College, Jasper, AL, and a bachelor's degree at Stillman College, Tuscaloosa, AL. She spent her career as a sales representative for The Handleman Company, Adams, Cadbury Schweppes and Pfizer. She later enjoyed working for the U.S. Census Bureau and retired as a manager at the U.S. Centers for Disease Control and Prevention. 
She is known for her strong faith, determination, and love for her family. She loved God with all of her being and served many years as a Sunday School teacher and as a church camp leader. She served passionately on prayer teams and the memorial committee. She was a charitable person and enjoyed volunteering at Baby Talk. She loved spending time with her family and friends, traveling, Bible study groups, home decorating, landscaping, reading, cooking, music, and Alabama football. Her radiant smile lit up any room, and she never met a stranger. 
A funeral service will be held at the Church of the Highlands Chapel at the Grants Mill Campus in Birmingham, AL, on May 8, 2025, at 6:30 p.m. A graveside service will be held at Walker Memory Gardens in Jasper, AL, on May 10, 2025, at 2 p.m. Church of the Highlands will officiate, and Collins-Burke Funeral Home will direct. 
Kathy was preceded in death by her husband Tommie Ray Courington; mother Hazel Terry; father Ray Terry; sister Patricia Terry; and brothers Larry Wayne Terry and Donald Terry. 
She is survived by her daughter Tammie Jean Butts; son Jonathan Ray Courington (Rosemary); granddaughters Taylor Cathryn Butts and Ashley Elizabeth Courington; sister Linda Holcomb (Wayman); brothers Douglas Terry (Janice) and Randall Terry (Alice); and a host of nieces, nephews, other family members and friends. 
In lieu of flowers, please make memorial donations to Hagee Ministries' Sanctuary of Hope, PO Box 1400, San Antonio, TX 78295.
`;
            break;
          case 'james-"jim"-payton':
            textContent = `James "Jim" Payton of Clanton, Chilton County, AL died May 5, 2025. Jim grew up in Clanton, AL and graduated from high school in Chilton County. While serving in the Air Force he was stationed in Japan for three years supporting the war efforts in Vietnam and Korea. After military service, he attended Valparaiso Technical Institute in Indiana and received a degree in Electrical and Electronic Engineering. In 1967, he joined The Birmingham News Company and was in charge of the technical part of the operation, the actual printing of the paper. He also represented management negotiating labor contracts. He implemented all the changes involved in computerizing and retired in 2000 after 33 years. Jim is survived by his wife of 51 years, Wanda; Children, Gayle Payton, Clanton and Dale (Judy) Payton, Birmingham; Step Children, Kristin Calhoun, Clanton and Tim Reynolds, Chelsea; Granddaughters, Katie and Lauren Payton, Birmingham; Step Grandsons, Brandon Calhoun, Portland, OR, Carter Reynolds and Cole Reynolds, Chelsea; Sister, Gulma (Kenneth) Hudson, Clanton; and numerous nieces and nephews. He was predeceased by his parents, Luther N. and Daisy Wainwright Payton; Brothers, Charles Allen Payton, Clanton and Billy Wade Payton, Birmingham. A visitation will be held Saturday, May 10, 2025, from 9:00 to 11:00 a.m. at Martin Funeral Home Chapel, in Clanton, AL. In lieu of flowers, the family requests donations to your favorite charity or Clanton First Methodist Church, 207 8th Street N Clanton, AL 35045. Martin Funeral `;
            break;
          case 'kathryn-rogers-ranelli':
            textContent = `Kathryn Rogers Ranelli was called home by her Heavenly Father on May 5th, 2025. 

Kathy was born on April 21st, 1948 in Birmingham, AL. She was preceded in death by her father, James "Doug" Douglas Rogers and her sister, Marsha Rogers Thrasher. 

Kathy's family held her heart and she was an extremely devoted wife, mother, daughter and sister. She is survived by her mother Kathryn Burgess Rogers; husband James Charles "J.C." Ranelli; daughters Staci Ranelli Graphos (Peter) & Jaime Ranelli Sullivan (Pat). Her grandchildren affectionately called her "Nonna"; James & Winston "Win" Graphos; Jack, Ryan & Hill Sullivan. Kathy is also survived by her brothers, James "Squeeky" Rogers, William "Chip" Rogers (Kathryn) & Charles "Casey" Rogers (Lori), as well as many nieces and nephews. 

Kathy spent her 20s and 30s as a scrub nurse in the operating rooms of Princeton & Brookwood hospitals. She met J.C. through friends and they were married for 53 years. They enjoyed married life in Birmingham, AL with a brief stint in Atlanta, GA from 1995-2000. Kathy was an active member of St. Mark the Evangelist Catholic Church, where she served as a Eucharistic Minister and was a cofounder the Bereavement Committee. 

Kathy & J.C. loved traveling the world together including trips to Israel, Italy & Hawaii. They also cherished their time with their life long friend group. They took yearly trips to Hilton Head, St. Croix, Antigua, Whistler, to name a few of the locations over 20+ years. This group also never missed an Alabama football game, traveling together in a motor home, which led to many memorable stories. 

But most of all, they enjoyed time with their family at WaterSound Beach. Kathy's passion was her daughters & grandsons. She was their biggest cheerleader, never missing a swim meet, tennis match, soccer or baseball game. But most importantly, she faithfully prayed for them. 

Kathy loved the Lord with all her heart. Everyone who knew her felt her love unconditionally. Quoting her loving husband, J.C., "She was the best person I ever met." 

A special thanks to Kathy's caregivers at Somerby Memory care and ACG Hospice (especially Beth and Tony). Their care for Kathy was exceptional, and we could not have made this journey without them. 

In lieu of flowers, please consider donating to the following ministry: 

St. Mark the Evangelist Catholic Church 
Bereavement Committee 
7340 Cahaba Valley Road 
Birmingham, AL 35242 

Arrangements for Kathy are as follows: 
Visitation and Mass Monday May 12th, 2025 
9 am Visitation, 10 am Funeral Mass, 
Luncheon to follow 

St. Mark The Evangelist Catholic Church 
7340 Cahaba Valley Road 
Birmingham, AL 35242 
205.980.1810Home directing.
`;
            break;
          case 'grace-margaret-"punky"-brooks-eastwood':
            textContent = `Grace Margaret "Punky" Brooks Eastwood, age 93 of Mountain Brook, passed away on April 27, 2025. Punky was born in Camilla, Georgia on February 14, 1932. She graduated from Gulf Park High School in Gulfport, Mississippi. From there she attended the University of Alabama where she was a member of Kappa Delta Sorority. She served on the UAB School of Nursing Board of Visitors. She also worked as a volunteer on the UAB surgical floor for 25 years and was a longtime member of St. Luke's Episcopal Church. 
Punky is preceded in death by her husband George Stone "Pete" Eastwood of 68 years, her parents, and her six siblings. She is survived by her children Billy Eastwood (Jan), Lucy McGowin (Jim), Margaret Wall (Tom) and Sallie Chalkley (Les); nine grandchildren and eighteen great grandchildren. 

A Celebration of Life Service will be held on Saturday, May 10, 2025, at St. Luke's Episcopal Church in Mountain Brook with the family receiving friends beginning at 10:00 am with the service following at 11:00 am. 

The family wishes to express their sincere gratitude to Maggie Smith for her exceptional love and care. 

In lieu of flowers, the family request memorials to be made to St. Luke's Foundation, 3736 Montrose Road, Birmingham, AL 35213 or UAB School of Nursing Scholarship Fund, 1701 University Blvd., Birmingham, AL 35294.
`;
            break;
          default:
            textContent = 'Full obituary not available.';
        }

        fullText.textContent = textContent;
        this.appendChild(fullText);
      }
    });
  });