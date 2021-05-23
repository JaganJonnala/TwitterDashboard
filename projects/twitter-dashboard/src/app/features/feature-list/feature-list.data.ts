import { environment as env } from '../../../environments/environment';

export interface Feature {
  name: string;
  version?: string;
  description: string;
  github?: string;
  documentation: string;
  medium?: string;
  routerLink?: string;
}

export const features: Feature[] = [
  {
    name: 'Recent Posts',
    version: '',
    description: 'Your recent posts',
    github: 'https://github.com/angular/angular',
    routerLink: 'twitter-dashboard/recent-posts',
    documentation: 'https://angular.io/docs/ts/latest/'
  },
  {
    name: 'Post Views',
    version: '',
    description: 'Your posts and related views for the post',
    github: 'https://github.com/angular/angular-cli',
    routerLink: 'twitter-dashboard//post-views',
    documentation: 'https://cli.angular.io/'
  },
  {
    name: 'Performance Dashboard',
    version: '',
    description: 'Your Performance dashboard',
    github: 'https://github.com/angular/angular-cli',
    routerLink: 'twitter-dashboard/analytics',
    documentation: 'https://cli.angular.io/'
  },
  {
    name: 'Twitter Stories',
    version: '',
    description: 'Stories',
    github: 'https://github.com/angular/angular-cli',
    routerLink: 'twitter-dashboard/stories',
    documentation: 'https://cli.angular.io/'
  }
];

export const dateWisePostsData=[
  {
    date: '23 Apr, 2021',
    reach:'128',
    views:'408',
    noOfPosts:'4',
    description:"Post reach is ordinary"
  },
  {
    date: '15 Apr, 2021',
    reach:'1218',
    views:'5009',
    noOfPosts:'12',
    description:"Post reach is Extraordinary, But still need some attention. Over all balanced"
  },
  {
    date: '11 Apr, 2021',
    reach:'0',
    views:'0',
    noOfPosts:'0',
    description:"You haven't Tweeted this month… yet People who Tweet consistently throughout the month get higher engagement over accounts with intermittent posting. Try posting a photo, people like photos."
  },

  {
    date: '4 Apr, 2021',
    reach:'421',
    views:'998',
    noOfPosts:'2',
    description:"Post reach is Extraordinary, But still need some attention. Over all balanced"
  }
]

export const storyItems = [
  {
    "name":"Jagan Jonnala",
    "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-1/c25.0.100.100a/p100x100/163959967_3711002919022769_1103199199923077986_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=c828sy-FcDMAX9gN-Wa&_nc_ht=scontent.fhyd11-1.fna&tp=27&oh=ef865b62b29b553a895724e22e06f20c&oe=60CE0B68",
    "stories":[
      {
        "imageUrl":"https://scontent-maa2-2.xx.fbcdn.net/v/t1.6435-9/61590468_2154601214662955_2952986854351175680_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Dz-BTJNk53cAX8yxcSk&_nc_ht=scontent-maa2-2.xx&oh=ccd4cb91132aeb7d4be9a6b53e2f1815&oe=60CE281B",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/46982072_1890298984426514_4513345170158125056_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=tmWZzrcNp-kAX_olJsr&_nc_ht=scontent-maa2-1.xx&oh=060b99543dc1610228aaed998d57e49d&oe=60CF1FB8",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.18169-9/10410715_700975796692178_147486515226667743_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=19026a&_nc_ohc=2L5rbHnotRMAX-lPyeM&_nc_ht=scontent.fhyd11-1.fna&oh=20c38edd329aee72a3d3416878b9446c&oe=60CE7DE1",
        "storyDescription":"Old is Gold"
      },
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t31.18172-8/19466497_1276686169121135_3871282949920184215_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=85kk71gCeoYAX8YQ1XH&_nc_ht=scontent.fhyd11-1.fna&oh=250431537ac6998266472af7182d48f1&oe=60CD60A1",
        "storyDescription":""
      }
    ],
    "time":"2h"
  },
  {
    "name":"Anil Chintu",
    "imageUrl":"https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.18169-9/25299361_1644330185628477_6070071440971510244_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=phVP0GHwI6gAX_3e0Fe&_nc_ht=scontent.fhyd14-2.fna&oh=5e29b07c9b245a66448ff35b6e824165&oe=60CCBB87",
    "stories":[
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/45767905_2021187394604068_1298025561657966592_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=ne-BLW10gbAAX_xzEHN&_nc_ht=scontent.fhyd11-1.fna&oh=41b7bb7b385c7a2c455f7638a58f4b1e&oe=60D0617D",
        "storyDescription":"Miss You Guys"
      },
      {
        "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/t1.18169-9/15202595_1111144995649373_605643164715725716_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=19026a&_nc_ohc=Y80xzpMepZ8AX8I9TJY&_nc_ht=scontent-maa2-1.xx&oh=77dc655e8c5a8cbd8b570b37c1ba5e80&oe=60CDC87B",
        "storyDescription":""
      },
    ],
    "time":"3h"
  },
  {
    "name":"Nagur Sk",
    "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t31.18172-0/s180x540/18489751_1540837599282525_7091625008571522478_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=w0X8eiB-X80AX8oiwRB&_nc_ht=scontent.fhyd11-1.fna&tp=7&oh=ce1dbcb79834f4e67bfd1d243d96912e&oe=60CF142C",
    "stories":[
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/61106702_2154671514655925_1223116757875556352_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=OSLMbbClGOMAX-g0saG&_nc_ht=scontent.fhyd11-1.fna&oh=fa5574e67ffa002bbe170b2d39c7e468&oe=60CFEEFE",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/61210333_2154689401320803_124661558910386176_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=WixGqnUZZDIAX_HliRD&_nc_ht=scontent.fhyd11-1.fna&oh=ae6bec134a485ae5102447d585778dfb&oe=60CECCA5",
        "storyDescription":""
      }
    ],
    "time":"6h"
  },
  {
    "name":"Rajendra Thavanam",
    "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/125338362_3115318211906708_455278744671416619_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QWBXp5f2DbQAX-8KH34&_nc_ht=scontent.fhyd11-1.fna&oh=fe157636a950196a84dcb61321975a2c&oe=60CCBA24",
    "stories":[
      {
        "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/t31.18172-8/965373_464106753680509_990974782_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=O6FRrUU2kNwAX9y-QuK&_nc_ht=scontent-maa2-1.xx&oh=26ddf7cbd9ae7173af54b470c44b8968&oe=60CD4237",
        "storyDescription":"College Memories"
      },
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t31.18172-8/1781444_1466319083596071_2072121400_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=2c4854&_nc_ohc=u3EsnZ2B64oAX_P-9YB&_nc_ht=scontent.fhyd11-1.fna&oh=a6f2e530aebfb416167dcdf9a0c907bc&oe=60CE26BD",
        "storyDescription":"Bundhh...."
      },
    ],
    "time":"12hr"
  },
  {
    "name":"Lakshman Kumar Musulla",
    "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/148400207_3580811115349403_3872664578307990144_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=VNGktPx52bUAX99nCEH&_nc_ht=scontent.fhyd11-1.fna&oh=fc131b203bb5def9c3e5e2ef203ecea6&oe=60CCF4FF",
    "stories":[
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/49449247_1926530857444112_6440647598901559296_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RDNnySYv1X8AX-lNp2k&_nc_ht=scontent.fhyd11-1.fna&oh=162734e028ad4c9cc0f0fd85480913d0&oe=60CDFF6D",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/34369693_1636720939758440_5116873317462048768_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=H8dCueSI-LsAX_ebq1n&_nc_ht=scontent.fhyd11-1.fna&oh=e777505a24e170505242c338f7885382&oe=60D07CAB",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/l/t31.18172-8/22829656_1427945580635978_5991150184802234465_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=vwBYHm6CNFcAX96ie_l&_nc_ht=scontent-maa2-1.xx&oh=97df3c47473d5d259b0b4b1940d16ec0&oe=60CDC2FD",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t31.18172-8/19417120_1318853288211875_8405390771893768010_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_ohc=C0DyqllcODQAX_5POSN&_nc_ht=scontent.fhyd11-1.fna&oh=a68564c117b289a425604beec21b436a&oe=60CEEB8A",
        "storyDescription":""
      },
    ],
    "time":"12hr"
  },
  {
    "name":"Satyanarayana Pilli",
    "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/45767905_2021187394604068_1298025561657966592_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=ne-BLW10gbAAX_xzEHN&_nc_ht=scontent.fhyd11-1.fna&oh=41b7bb7b385c7a2c455f7638a58f4b1e&oe=60D0617D",
    "stories":[
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/60356805_2134634046659672_6563627635165888512_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=BCkzVOHth0sAX8bRr3D&_nc_ht=scontent.fhyd11-1.fna&oh=2d4c5c577d0660f5e288f35b696a7f77&oe=60CE7AEB",
        "storyDescription":""
      }
    ],
    "time":"12hr"
  },
  {
    "name":"Sai Deepak Kanduri",
    "imageUrl":"https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/136428937_3153776304721922_562767407167916767_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=r9OFV2Q3HW4AX-TDAoc&_nc_ht=scontent.fhyd14-2.fna&oh=c1a6e4f3c6dfa315f4117ced512e5669&oe=60D0398B",
    "stories":[
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.18169-9/10710980_572089232890655_1189132992352316833_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=R0_mj_iSncQAX89UlF1&_nc_ht=scontent.fhyd11-1.fna&oh=fcfa384ffd14e365184b26ccc0360500&oe=60CE8D7D",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/t1.18169-9/10494817_572091416223770_6890754674229424542_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=Ksca_6hf_wcAX8NsNvD&_nc_ht=scontent-maa2-1.xx&oh=2018dc66da79e020c0ce93fad97bfab9&oe=60CEE9C8",
        "storyDescription":""
      }
    ],
    "time":"12hr"
  },
  {
    "name":"Veerendra Muthakana",
    "imageUrl":"https://scontent-maa2-2.xx.fbcdn.net/v/t1.6435-9/60437059_2136806033109140_4580996651736367104_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=vMSSlBbeKXkAX-Db4fZ&_nc_ht=scontent-maa2-2.xx&oh=54f29c35977365d778d69f702bee62de&oe=60CDF359",
    "stories":[
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.18169-0/c0.0.638.638a/s552x414/12316622_934552766635903_2612030416669156906_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=da31f3&_nc_ohc=qQrX07nk7LUAX-w21Mf&_nc_oc=AQmhziZpSZ6_mv26doZEr-7jPFwJ6MyVmQZ1sk3XkDurm4KM22eViDINlB1laT4k81tFzPX7Oj5Kj3c6lp2ZHcUX&_nc_ht=scontent.fhyd11-1.fna&tp=28&oh=ec0b91bcd8eb736aee5730137016c62d&oe=60D0808E",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/60261680_2134634369992973_3171381126694436864_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=buc3NWpAleUAX_-F_hO&_nc_ht=scontent-maa2-1.xx&oh=7d0319eff891ed82df29fb22749844eb&oe=60CE276D",
        "storyDescription":""
      }
    ],
    "time":"12hr"
  },
  {
    "name":"Saran Gurram",
    "imageUrl":"https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/45708481_2038655389524750_8806980936102051840_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YLPLZdsJTEcAX9dMzhp&_nc_ht=scontent.fhyd14-1.fna&oh=2bcb9a4acd6c782c1696280ef8b4297a&oe=60D056AA",
    "stories":[{
      "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/60253677_2136806343109109_9130150832552017920_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=E6-4ZegD-VoAX_fFd4R&_nc_ht=scontent-maa2-1.xx&oh=317aecdcf74198c8ce14e3f965075b95&oe=60CD5CAA",
      "storyDescription":""
    },
    {
      "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/60448337_2134635309992879_7785898722570797056_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=oi77a2B_hogAX_Okpun&_nc_ht=scontent.fhyd11-1.fna&oh=8cae41f90901463d9db0aad98da5537e&oe=60CD72A5",
      "storyDescription":""
    },],
    "time":"12hr"
  },
  {
    "name":"Abdul Muneem",
    "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-1/p480x480/134589392_3651475344944967_8451879393416310693_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=XAIbJ_R_LnUAX8pqdAc&_nc_ht=scontent.fhyd11-1.fna&tp=6&oh=45006c0865b0fe3ecdb79d71768fb731&oe=60D04836",
    "stories":[
      {
        "imageUrl":"https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/60341796_2136807079775702_4042714568101724160_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=-7OOnVOZeHIAX_n5Xe_&_nc_ht=scontent.fhyd14-2.fna&oh=3c0c0aea6db1e3ee0b9c225756add07f&oe=60CF5E93",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/60926738_2136807246442352_8750651722755473408_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=t8_zMo7XhK0AX9EWSOq&_nc_ht=scontent-maa2-1.xx&oh=d5115aff252216d3d02c22a2d9729f2b&oe=60CD0BE3",
        "storyDescription":""
      },
    ],
    "time":"12hr"
  },
  {
    "name":"Mohan Kumar",
    "imageUrl":"https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.18169-9/14670_921827781215382_4555205575005581409_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=90RxQiy9IegAX-ZGjFY&_nc_ht=scontent.fhyd14-2.fna&oh=cc680575d2f5a486b6242b58b718a7e2&oe=60D069D5",
    "stories":[
      {
        "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/60360138_2139606992829044_5951003296884850688_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8mXID6hAUJYAX8Raxaz&_nc_ht=scontent-maa2-1.xx&oh=81caa00b794e6feb1e9404d5e63be6f7&oe=60CE3EF3",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/60843355_2141017502687993_1608977474446688256_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Jq2a6ScPeloAX8udVPX&_nc_ht=scontent-maa2-1.xx&oh=4fa3effe455fe189854ea3b102c13b04&oe=60CD3783",
        "storyDescription":""
      },
    ],
    "time":"12hr"
  },
  {
    "name":"Ajay B. Matcha",
    "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.18169-9/422402_364962316866823_958339328_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=LmEQwYTakXoAX_pxE0j&_nc_ht=scontent.fhyd11-1.fna&oh=22eb8a5c71efdb328ab8f6d5d50b2572&oe=60D01FC6",
    "stories":[
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/60686804_2141017892687954_5239622091212324864_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fu3Z5O_cGCIAX-5YeuU&_nc_ht=scontent.fhyd11-1.fna&oh=3052e4ac2ea2c186537e3aea34d21b1e&oe=60CCE0C7",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/61760215_2162361543886922_5182979143389675520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=uYjiwJW0_u0AX_tbaK7&_nc_ht=scontent.fhyd11-1.fna&oh=45aa487f5a386fae2b2705f8734bf755&oe=60CEDEE4",
        "storyDescription":""
      },
    ],
    "time":"12hr"
  },
  {
    "name":"Dwarakanand Moganti",
    "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.18169-9/15181608_1155192251236752_2037274525927388705_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=ZLoDN9PuKq0AX-pQm3Y&_nc_ht=scontent.fhyd11-1.fna&oh=f043a979ea4dba74eff6e45c8ce1c85e&oe=60CD9B31",
    "stories":[
      {
        "imageUrl":"https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/65019300_2205530496236693_7174817527384506368_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=bDU2mAjawp8AX8QiKND&_nc_ht=scontent.fhyd14-2.fna&oh=6c98bd73c991d8aac7fb1ab5b57705a9&oe=60CFFCFE",
        "storyDescription":""
      },
      {
        "imageUrl":"https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/61859799_2164865393636537_1967556442789511168_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Ntn6wLUNHSkAX8f2kbG&_nc_ht=scontent.fhyd11-1.fna&oh=3c183227f33617c5d37bbd374af5d5cf&oe=60CF8B12",
        "storyDescription":""
      },
    ],
    "time":"12hr"
  },
]