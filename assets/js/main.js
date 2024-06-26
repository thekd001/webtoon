// 데일리
const upNew  = `<div class="ic"><span class="blind">신작</span><svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="10.082" cy="10" r="10" fill="#00DC64"></circle><path d="M9.306 12.482v1.065H2.812v-2.5h1.17v1.435h5.324ZM9.14 5.988v5.632H7.977V5.988H9.14Zm-5.21 0H5.1c0 .287-.017.569-.052.845-.03.275-.076.545-.14.81.252.398.571.777.958 1.135.388.357.787.65 1.197.88l-.695.87a6.37 6.37 0 0 1-1.003-.73 7.632 7.632 0 0 1-.88-.924c-.176.37-.39.71-.643 1.021a4.264 4.264 0 0 1-.827.8l-.871-.747c.563-.417 1-.962 1.311-1.637.317-.675.475-1.449.475-2.323ZM10.489 6.111h4.127v.995h-1.505a8.073 8.073 0 0 1-.061.396c-.018.129-.044.255-.08.378.235.358.537.701.907 1.03.37.322.754.592 1.153.81-.123.14-.247.278-.37.413-.117.129-.238.26-.36.396a6.334 6.334 0 0 1-1.77-1.505 5.184 5.184 0 0 1-.66.95 4.248 4.248 0 0 1-.827.73l-.228-.175a3.282 3.282 0 0 1-.22-.185l-.23-.176c-.07-.059-.14-.12-.21-.185.492-.3.894-.695 1.205-1.188.311-.493.51-1.056.599-1.69h-1.47v-.994Zm7.4 1.61v1.11h-.985v1.768h-1.17V5.988h1.17v1.734h.986Zm-.985 3.256v2.693h-1.17v-1.645h-5.166v-1.048h6.336Z" fill="#000"></path></svg></div>`
const upEl =`<i class="ic-up"><svg width="17" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="0.5" y="0.5" width="16" height="12" rx="1.5" stroke="#FF4747"></rect><path d="M3.449 6.899c0 1.518.957 2.53 2.401 2.53 1.454 0 2.42-1.012 2.42-2.53V3.403H7.12V6.89c0 .837-.497 1.389-1.251 1.389-.764 0-1.27-.561-1.27-1.399V3.403h-1.15v3.496Zm6.174 2.4h1.15V7.314h.929c1.435 0 2.383-.773 2.383-1.96 0-1.177-.939-1.95-2.365-1.95H9.623V9.3Zm2.19-4.884c.634 0 1.057.377 1.057.938 0 .57-.423.948-1.058.948h-1.04V4.415h1.04Z" fill="#FF4747"></path></svg><span class="blind">UP</span></i>`

idx = 0;
dailyList();
function dailyList(){
    fetch('./assets/data/dailyUser.json')
    .then(res=>res.json())
    .then(json=>{
      ListArr=[ json.userList, json.updateList, json.viewList, json.starList ]
      data=ListArr[idx];
      const slide1 = new Swiper('.day-slide',{   
            slidesPerView: 5,
            slidesPerGroup: 5,
            navigation: {
                nextEl: ".slide-next",
                prevEl: ".slide-prev",
            },
        })
      let html=``;
      data.forEach((element,i) => {
          isNew = (element.thumbnailBadgeList.includes("NEW"))?upNew:'';
          isUp = (element.up)?upEl:'';
          html+=`
          <div class="swiper-slide">
            <div class="img-area">
                <a href="#">
                    <div class="thumb">
                        ${isNew}
                        <img src="${element.thumbnailUrl}" alt>
                    </div>
                </a>
            </div>
            <div class="text-area">
                <strong>
                    <a href="">
                      ${isUp}
                      <span class="text">${element.titleName}</span>
                    </a>
                </strong>
                <p><a href="">${element.displayAuthor}</a></p>
            </div>
        </div>`
      });
      $('#dailyUpdateList').html(html);
      slide1.update();
    })
}

$('.sc-day .title-list a').click(function(e){
    e.preventDefault();
    $('.sc-day .title-list a').removeClass('active');
    $(this).addClass('active');
    idx=$(this).parent().index();
    dailyList();
})



// 장르별
const icAdult = `<i class="ic">
<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.953 2.097c0 2.199-.161 7.11.228 9.054C3.402 17.265 10 19.711 10 19.711s6.598-2.446 7.819-8.56c.389-1.945.227-6.855.227-9.054C18.046 2.097 14.237 1 10 1 5.763 1 1.953 2.097 1.953 2.097Z" fill="#F4831F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.402a2.34 2.34 0 0 0-2.34 2.339c0 1.29 1.05 2.339 2.34 2.339a2.34 2.34 0 0 0 0-4.678Zm2.695 5.382c-.036-.02-.07-.04-.11-.059a1.522 1.522 0 0 0-.14-.057 3.783 3.783 0 0 0-.49-.163c-.574.4-1.257.615-1.956.617-.722 0-1.393-.23-1.956-.617-.212.054-.42.126-.62.215-.052.024-.096.05-.14.075a2.552 2.552 0 0 0-1.323 2.257 7.015 7.015 0 0 0 8.08 0 2.55 2.55 0 0 0-1.345-2.268Z" fill="#fff"></path></svg>
<span class="blind">청유물</span>
</i>`
const rank1 = `<span class="blind">1</span>
<svg width="36" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M13.788 45.296H25.29V6.152H13.787l-9.82 6.565v9.63L13.57 16h.217v29.297Z" fill="#000"></path><path d="M13.788 45.296h-1.852v1.852h1.852v-1.852Zm11.502 0v1.852h1.851v-1.852H25.29Zm0-39.144h1.851V4.301H25.29v1.851Zm-11.502 0V4.301h-.562l-.467.312 1.029 1.54Zm-9.82 6.565-1.03-1.54-.822.55v.99h1.852Zm0 9.63H2.116v3.444l2.873-1.9-1.021-1.544ZM13.57 16v-1.851h-.557l-.464.307 1.02 1.544Zm.217 0h1.852v-1.851h-1.852v1.851Zm0 31.15H25.29v-3.705H13.787v3.704Zm13.353-1.853V6.152h-3.703v39.144h3.703ZM25.29 4.301H13.787v3.703H25.29V4.301Zm-12.531.312-9.82 6.565 2.058 3.079 9.82-6.565-2.058-3.08ZM2.116 12.717v9.63H5.82v-9.63H2.116ZM4.99 23.892l9.603-6.348-2.042-3.09-9.603 6.348 2.042 3.09Zm8.582-6.04h.217v-3.704h-.217v3.703Zm-1.635-1.853v29.297h3.704V16h-3.704Z" fill="#fff"></path><path d="M13.788 45.296h11.501V6.152H13.788l-9.82 6.565v9.63L13.57 16h.217v29.297Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.936 47.148V19.3l-9.82 6.491V11.727l11.11-7.426h13.915v42.847H11.937ZM13.571 16h.217v29.297H25.29V6.152H13.788l-9.82 6.565v9.63L13.571 16Z" fill="#fff"></path></svg>`
const rank2 = `<span class="blind">2</span>
<svg width="36" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1.867 18.44v.218h10.471v-.244c0-2.849 2.116-4.856 5.1-4.856 2.957 0 4.666 1.655 4.666 3.77 0 2.17-1.194 4.043-3.825 6.402L2.545 37.648v7.65h31.088v-8.681h-16.25v-.217l9.197-8.138c2.088-1.845 6.591-5.914 6.591-11.285 0-7.107-5.832-11.909-15.326-11.909-9.684 0-15.978 5.371-15.978 13.374Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M.016 20.51v-2.07c0-4.524 1.797-8.394 5.016-11.104 3.19-2.685 7.64-4.12 12.813-4.12 5.04 0 9.315 1.273 12.372 3.687 3.098 2.447 4.807 5.964 4.807 10.073 0 3.214-1.347 5.95-2.864 8.05-1.517 2.099-3.301 3.693-4.354 4.622l-5.78 5.116h13.459v12.384H.694V36.812l16.349-14.46a.183.183 0 0 1 .004-.004c2.523-2.264 3.205-3.667 3.205-5.02 0-.528-.2-.95-.572-1.268-.392-.333-1.102-.65-2.242-.65-1.071 0-1.872.355-2.392.85-.514.488-.856 1.207-.856 2.154v2.096H.016Zm18.263 3.22L2.546 37.648v7.65h31.087v-8.681H17.384v-.217l9.196-8.138c2.089-1.845 6.592-5.914 6.592-11.285 0-7.107-5.832-11.909-15.327-11.909-9.009 0-15.083 4.648-15.887 11.739-.06.531-.09 1.077-.09 1.635v.217h10.47v-.244c0-2.849 2.116-4.856 5.1-4.856 2.957 0 4.666 1.655 4.666 3.77 0 2.17-1.194 4.043-3.825 6.402Z" fill="#fff"></path></svg>`
const rank3=`<span class="blind">3</span>
<svg width="36" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M13.142 30.183h4.556c3.142 0 5.002 1.52 5.002 4.069 0 2.523-1.964 4.205-4.897 4.205-3.247 0-5.237-1.6-5.316-4.205H1.907c.367 7.975 6.495 13.13 15.66 13.13 10.03 0 16.419-4.64 16.419-11.963 0-5.344-3.64-8.735-9.191-9.36v-.216c4.556-.841 7.882-4.26 7.882-8.98 0-6.618-5.657-10.796-14.586-10.796-9.296 0-15.45 5.182-15.476 13.021h10.003c0-2.74 2.016-4.639 5.001-4.639 3.038 0 4.845 1.52 4.845 3.988 0 2.496-1.807 4.042-4.713 4.042h-4.61v7.704Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.355 32.035V20.94H.822l.006-1.858C.843 14.617 2.622 10.832 5.75 8.2c3.095-2.605 7.387-3.986 12.342-3.986 4.706 0 8.755 1.098 11.68 3.261 2.983 2.207 4.693 5.458 4.693 9.388 0 3.814-1.789 6.871-4.506 8.79a10.967 10.967 0 0 1 2.751 1.979c1.98 1.967 3.064 4.645 3.064 7.786 0 4.297-1.906 7.84-5.208 10.243-3.243 2.36-7.745 3.571-12.998 3.571-4.896 0-9.145-1.377-12.255-3.987C2.178 42.616.33 38.833.123 34.34l-.09-1.94H14.22l.055 1.794c.023.779.307 1.299.77 1.667.511.406 1.397.744 2.759.744 1.149 0 1.94-.329 2.408-.73.438-.377.7-.901.7-1.623 0-.762-.252-1.22-.639-1.535-.442-.36-1.254-.682-2.574-.682h-6.344Zm16.604-5.248a13.52 13.52 0 0 0-3.164-.727v-.217l.023-.005a10.8 10.8 0 0 0 3.029-1.035c2.915-1.525 4.83-4.357 4.83-7.94 0-6.618-5.656-10.796-14.585-10.796-8.543 0-14.432 4.376-15.351 11.17a14.169 14.169 0 0 0-.125 1.851h10.003c0-2.74 2.016-4.639 5.001-4.639 3.038 0 4.845 1.52 4.845 3.988 0 2.496-1.807 4.042-4.714 4.042h-4.609v7.704H17.7c3.142 0 5.002 1.52 5.002 4.069 0 2.523-1.965 4.205-4.897 4.205-3.247 0-5.238-1.6-5.316-4.205H1.908c.03.636.096 1.253.197 1.852C3.27 43.016 9.133 47.38 17.568 47.38c10.03 0 16.419-4.638 16.419-11.962 0-4.247-2.298-7.26-6.028-8.632Zm-13.553-6.16h3.345c1.166 0 1.9-.31 2.307-.66.37-.316.62-.784.62-1.53 0-.722-.242-1.166-.612-1.473-.42-.347-1.19-.663-2.446-.663-1.129 0-1.93.356-2.425.817-.48.448-.789 1.098-.789 1.97v1.54Z" fill="#fff"></path></svg>`
const rank4=`<span class="blind">4</span>
<svg width="37" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.11 46.296v.926H31.556v-5.805h4.441V30.75h-4.441V6.226H15.719l-.272.436C8.956 17.067 5.22 23.69 1.869 30.564l-.093.192V41.417h18.333v4.88Zm.31-15.086h-6.93c1.851-3.418 3.246-6.074 4.68-8.806.72-1.369 1.448-2.757 2.25-4.269V31.21Z" fill="#000" stroke="#fff" stroke-width="1.852"></path></svg>`
const rank5=`<span class="blind">5</span>
<svg width="36" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.796 47.381c9.68 0 16.115-5.778 16.115-14.485 0-7.65-5.283-13.157-12.63-13.157-4.182 0-7.159 1.872-8.553 4.774h-.215l.59-8.68h18.314v-8.68H4.362L2.646 30.291h9.948c1.126-1.79 3.083-2.849 5.282-2.849 3.244 0 5.39 2.306 5.39 5.724 0 3.255-2.172 5.534-5.39 5.534-2.869 0-5.175-1.682-5.63-4.096H2.028C2.083 42.092 8.6 47.38 17.796 47.38Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.362 7.152h27.055v8.681H13.103l-.59 8.68h.215a7.931 7.931 0 0 1 1.784-2.416c1.612-1.482 3.909-2.358 6.77-2.358 7.346 0 12.629 5.507 12.629 13.157 0 8.707-6.436 14.485-16.115 14.485-8.419 0-14.59-4.432-15.616-10.925-.095-.6-.146-1.218-.15-1.851h10.215c.456 2.414 2.762 4.096 5.631 4.096 3.218 0 5.39-2.279 5.39-5.534 0-3.418-2.145-5.724-5.39-5.724-2.199 0-4.156 1.058-5.282 2.848H2.646L4.362 7.152Zm10.316 12.503c1.804-1.142 4.05-1.768 6.604-1.768 8.408 0 14.46 6.388 14.46 15.009 0 4.843-1.805 8.983-5.043 11.892-3.218 2.892-7.71 4.445-12.903 4.445-9.82 0-17.534-5.761-17.597-14.615l-.013-1.865h13.573l.284 1.504c.253 1.339 1.621 2.592 3.833 2.592 1.168 0 2.027-.404 2.594-.99.57-.59.965-1.489.965-2.692 0-1.315-.407-2.263-.975-2.869-.56-.596-1.408-1.003-2.584-1.003-1.607 0-2.966.763-3.738 1.99l-.54.858H.674l1.99-26.842h30.584v12.384H14.812l-.134 1.97Z" fill="#fff"></path></svg>`
const rank6=`<span class="blind">6</span>
<svg width="36" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.68 47.381c8.975 0 15.335-5.886 15.335-14.268 0-7.433-5.206-12.886-12.18-12.886-4.848 0-8.079 2.605-9.386 6.402h-.206c-.538-7.27 2.206-11.908 6.36-11.908 2.128 0 3.923 1.166 4.41 2.848h10.54C32.656 10.896 26.45 6.067 18.63 6.067 8.55 6.067 1.96 13.934 1.96 26.711c0 6.185 1.54 11.474 4.411 15.11 2.872 3.662 7.232 5.56 12.309 5.56Zm-.103-8.707c-2.82 0-5.026-2.279-5.026-5.236 0-2.93 2.206-5.181 5.026-5.181 2.821 0 5.052 2.252 5.052 5.181 0 2.957-2.23 5.236-5.052 5.236Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.014 17.57c-.487-1.683-2.282-2.85-4.41-2.85-3.438 0-5.909 3.175-6.355 8.388a22.094 22.094 0 0 0-.005 3.521h.205l.006-.017a9.878 9.878 0 0 1 1.5-2.812c1.698-2.202 4.364-3.573 7.88-3.573 6.974 0 12.18 5.453 12.18 12.886 0 8.382-6.36 14.268-15.335 14.268-5.077 0-9.437-1.898-12.309-5.56-2.872-3.636-4.41-8.925-4.41-15.11 0-12.777 6.59-20.644 16.668-20.644 7.077 0 12.831 3.954 14.527 9.65.178.6.312 1.217.397 1.852h-10.54Zm-8.59 3.207c1.839-1.451 4.203-2.317 6.994-2.396l-.078-.27c-.192-.66-1.108-1.538-2.737-1.538-1.363 0-2.553.72-3.426 2.307a8.833 8.833 0 0 0-.752 1.897ZM27.2 19.421h8.372l-.285-2.113C34.231 9.465 27.051 4.215 18.63 4.215 13.13 4.215 8.46 6.38 5.19 10.388 1.943 14.368.21 19.998.21 26.71c0 6.48 1.61 12.235 4.816 16.294 3.266 4.163 8.161 6.228 13.654 6.228 4.846 0 9.11-1.591 12.188-4.451 3.095-2.875 4.898-6.951 4.898-11.67 0-6.412-3.444-11.57-8.567-13.691ZM15.302 33.438c0 1.903 1.392 3.384 3.276 3.384 1.895 0 3.3-1.493 3.3-3.384 0-1.845-1.387-3.33-3.3-3.33-1.902 0-3.276 1.473-3.276 3.33Zm-1.75 0c0 2.957 2.205 5.236 5.026 5.236 2.82 0 5.051-2.279 5.051-5.236 0-2.93-2.23-5.181-5.052-5.181-2.82 0-5.026 2.252-5.026 5.181Z" fill="#fff"></path></svg>`
const rank7=`<span class="blind">7</span>
<svg width="36" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4.919 46.296h12.847l16.29-32.523v-9.23H1.938v9.26h20.024v.23L4.919 46.297Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m1.846 48.148 17.166-32.494H.087V2.69h35.822v11.52l-17 33.937H1.847Zm20.116-34.346v.232L4.919 46.296h12.847l16.29-32.523v-9.23H1.94v9.26h20.023Z" fill="#fff"></path></svg>`
const rank8=`<span class="blind">8</span>
<svg width="36" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.95 47.454c9.759 0 16.273-4.977 16.273-12.442 0-5.816-3.798-10.04-9.23-10.706v-.232c4.476-.868 7.746-4.803 7.746-9.578 0-6.452-5.986-11.11-14.79-11.11-8.802 0-14.789 4.658-14.789 11.082 0 4.832 3.27 8.738 7.797 9.606v.232c-5.432.665-9.255 4.86-9.255 10.677 0 7.494 6.313 12.47 16.248 12.47Zm0-8.16c-2.993 0-5.005-2.257-5.005-5.208 0-2.952 2.012-5.209 5.005-5.209s5.005 2.257 5.005 5.209c0 2.951-2.012 5.208-5.005 5.208Zm0-18.547c-2.465 0-4.25-2.026-4.25-4.601 0-2.604 1.785-4.63 4.25-4.63s4.276 2.026 4.276 4.63c0 2.575-1.811 4.6-4.276 4.6Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.637 45.575c-3.187 2.436-7.594 3.73-12.687 3.73-5.176 0-9.583-1.292-12.748-3.74C1.99 43.08.092 39.415.092 34.983c0-5.058 2.445-8.989 6.117-11.042-2.808-2.065-4.658-5.453-4.658-9.473 0-3.959 1.867-7.26 4.818-9.497 2.925-2.216 6.954-3.437 11.581-3.437 4.628 0 8.657 1.22 11.582 3.442 2.953 2.24 4.817 5.55 4.817 9.52 0 3.976-1.847 7.366-4.637 9.437 3.683 2.06 6.121 6.016 6.121 11.079 0 4.441-1.967 8.094-5.196 10.563Zm-2.772-20.532c3.852 1.57 6.358 5.244 6.358 9.969 0 7.465-6.514 12.442-16.273 12.442-9.935 0-16.248-4.977-16.248-12.471 0-4.718 2.516-8.37 6.365-9.936.887-.36 1.844-.61 2.857-.737l.034-.004v-.232a9.632 9.632 0 0 1-2.805-1.003C5.14 21.427 3.16 18.228 3.16 14.468c0-6.424 5.986-11.083 14.79-11.083 8.802 0 14.788 4.659 14.788 11.111 0 3.714-1.978 6.92-4.963 8.57a9.476 9.476 0 0 1-2.762 1.004l-.021.004v.232l.034.004c1.007.126 1.957.375 2.838.733Zm-13.31 9.043c0 1.794 1.17 3.356 3.395 3.356s3.396-1.562 3.396-3.356c0-1.795-1.17-3.357-3.396-3.357-2.225 0-3.395 1.562-3.395 3.357Zm.754-17.94c0 1.471.993 2.749 2.641 2.749 1.66 0 2.666-1.292 2.666-2.75 0-1.493-1.012-2.777-2.666-2.777-1.641 0-2.64 1.27-2.64 2.778Zm-2.364 17.94c0 2.951 2.012 5.208 5.005 5.208s5.005-2.257 5.005-5.208c0-2.952-2.012-5.209-5.005-5.209s-5.005 2.257-5.005 5.209Zm.754-17.94c0 2.575 1.786 4.6 4.251 4.6 2.465 0 4.276-2.025 4.276-4.6 0-2.604-1.811-4.63-4.276-4.63s-4.25 2.026-4.25 4.63Z" fill="#fff"></path></svg>`
const rank9=`<span class="blind">9</span>
<svg width="36" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.373 47.454c10.47 0 16.838-8.45 16.838-22.049 0-6.597-1.547-12.24-4.435-16.117-2.888-3.906-7.35-5.903-12.506-5.903-8.949 0-15.499 6.25-15.499 15.191 0 7.929 5.416 13.745 12.352 13.745 5.055 0 8.304-2.836 9.438-6.83h.207c.567 8.045-2.14 12.703-6.215 12.703-2.27 0-4.177-1.244-4.667-3.038H2.236c.902 7.118 7.22 12.298 15.137 12.298Zm.051-23.727c-2.862 0-5.106-2.402-5.106-5.527 0-3.154 2.27-5.584 5.106-5.584 2.811 0 5.029 2.43 5.029 5.584 0 3.125-2.218 5.527-5.029 5.527Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.886 35.156c.49 1.794 2.398 3.038 4.667 3.038 3.417 0 5.873-3.277 6.242-9.08.07-1.094.064-2.278-.022-3.546l-.005-.076h-.207l-.005.019a9.876 9.876 0 0 1-1.38 2.944c-1.647 2.36-4.37 3.866-8.053 3.866-6.936 0-12.352-5.816-12.352-13.745 0-8.94 6.55-15.19 15.498-15.19 5.158 0 9.619 1.996 12.507 5.902 2.888 3.877 4.436 9.52 4.436 16.117 0 13.6-6.37 22.049-16.84 22.049-7.212 0-13.097-4.299-14.77-10.446-.163-.6-.286-1.218-.366-1.852h10.65ZM31.044 8.103c-3.27-4.42-8.244-6.57-13.775-6.57C7.64 1.534.121 8.374.121 18.577c0 7.06 3.819 12.656 9.249 14.728H.334l.268 2.113c1.052 8.297 8.298 13.889 16.77 13.889 5.66 0 10.35-2.302 13.601-6.574 3.224-4.237 4.889-10.22 4.889-17.327 0-6.893-1.614-13-4.818-17.302ZM14.343 34.17l.12.443c.196.715 1.22 1.729 3.09 1.729 1.383 0 2.564-.746 3.418-2.408.345-.671.635-1.495.846-2.473-1.896 1.674-4.432 2.664-7.474 2.709Zm-.374-15.97c0 2.034 1.442 3.674 3.455 3.674 1.939 0 3.378-1.616 3.378-3.675 0-2.106-1.456-3.732-3.378-3.732-1.975 0-3.455 1.656-3.455 3.732Zm-1.65 0c0 3.124 2.243 5.526 5.105 5.526 2.81 0 5.029-2.402 5.029-5.527 0-3.154-2.218-5.584-5.029-5.584-2.836 0-5.106 2.43-5.106 5.584Z" fill="#fff"></path></svg>`
const rank10=`<span class="blind">10</span>
<svg width="59" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9.85 46.296v.926h12.576V6.226H10.503l-.23.15-8.925 5.811-.42.274v11.826l1.425-.915 7.499-4.809v27.733ZM40.753 48.307c5.199 0 9.484-2.088 12.446-5.905 2.942-3.791 4.52-9.208 4.52-15.8 0-6.647-1.598-12.014-4.555-15.74-2.976-3.75-7.262-5.748-12.411-5.748-5.15 0-9.442 2.006-12.424 5.762-2.963 3.732-4.568 9.106-4.568 15.753 0 6.606 1.585 12.017 4.535 15.798 2.969 3.807 7.26 5.88 12.457 5.88Zm0-10.695c-1 0-2.028-.617-2.855-2.397-.834-1.796-1.372-4.62-1.372-8.586 0-3.981.538-6.76 1.369-8.506.817-1.72 1.837-2.314 2.858-2.314 1.019 0 2.033.592 2.844 2.311.826 1.748 1.358 4.527 1.358 8.51 0 3.967-.532 6.79-1.361 8.587-.822 1.78-1.842 2.395-2.841 2.395Z" fill="#000" stroke="#fff" stroke-width="1.852"></path></svg>`
rankArr=[rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9, rank10];

genreTitle=[
    {
        id:1001,
        title:"로맨스"
    },
    {
        id:1002,
        title:"판타지"
    },
    {
        id:1003,
        title:"액션"
    },
    {
        id:1004,
        title:"일상"
    },
    {
        id:1005,
        title:"스릴러"
    },
    {
        id:1006,
        title:"개그"
    },
    {
        id:1007,
        title:"무협/사극"
    },
    {
        id:1008,
        title:"드라마"
    },
    {
        id:1009,
        title:"감성"
    },
    {
        id:1010,
        title:"스포츠"
    }
]

genreList(1001);
function genreList(a){
    fetch('./assets/data/genrePure.json')
    .then(res=>res.json())
    .then(json=>{
      data=json.titleList;
    
      const slide2 = new Swiper('.hot-slide',{   
        slidesPerView: 5,
        slidesPerGroup: 5,
        navigation: {
            nextEl: ".hot-next",
            prevEl: ".hot-prev",
        },
    })
      let html=``;
      sortData=data.filter(function(parm){
        return parm.genre === a;
      })
      sortData.forEach((element,index) => {
        isAdult = (element.thumbnailBadgeList.includes("ADULT"))?icAdult:''
        html+=`<div class="swiper-slide">
        <div class="img-area">
            <a href="">
                ${isAdult}
                <img src="${element.thumbnailUrl}" alt>
            </a>
            <span class="number">
                ${rankArr[index]}
            </span>
        </div>
        <strong><a href="">${element.titleName}</a></strong>
    </div>`
      });
      $('#genreList').html(html);
      slide2.update();
    })
}  
$('.sc-hot .title-list a').click(function(e){
    e.preventDefault();
    $('.sc-hot .title-list a').removeClass('active');

    $(this).addClass('active');
    dataGenre = $(this).data('genre');
    genreList(dataGenre)

    function isGenre(element)  {
        if(element.id === dataGenre)  {
          return true;
        }
      }
      const genreText = genreTitle.find(isGenre).title;
      $('.genreType').html(genreText);      
})


// 베스트도전
const upBest = `<i class="ic-ch"><svg width="56" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 4a4 4 0 0 1 4-4h52v16a4 4 0 0 1-4 4H0V4Z" fill="#000" fill-opacity="0.7"></path><path d="M9.817 11.367h-1.08V9.576h1.08v1.791Zm1.872-2.349h-.774V6.741H9.817V8.64h-1.08V6.732H7.621v5.58h3.294v-2.34h.774v3.942h1.107V6.129h-1.107v2.889Zm1.683-3.042v8.289h1.125V5.976h-1.125Zm9.54 3.915c-1.873-.324-2.899-1.611-2.899-2.826v-.594h-1.269v.594c0 1.188-1.035 2.502-2.898 2.826l.504.99c1.44-.279 2.493-1.089 3.024-2.142.531 1.053 1.593 1.854 3.033 2.142l.504-.99Zm-7.246 2.412v.963h7.506v-.963h-7.506Zm14.985-2.043h-4.617v-.927h4.365v-.918h-4.365v-.873h4.554v-.954h-5.76v4.608h5.823v-.936Zm-6.705 2.097v.963h7.506v-.963h-7.506Zm12.617.009v-1.728h2.367v-.954h-4.635V7.506h4.572v-.954h-5.77v4.086h2.278v1.728h-3.15v.972h7.506v-.972h-3.168Zm8.387-4.239v.963h1.296v2.943h1.188V5.985h-1.188v2.142H44.95Zm.55 1.908c-1.306-.441-1.873-1.458-1.873-2.439v-.108h1.611v-.945h-4.455v.945h1.63v.117c0 1.044-.595 2.133-1.954 2.574l.594.945a3.25 3.25 0 0 0 1.99-1.8c.35.747.971 1.341 1.88 1.638l.576-.927Zm-2.34 3.15v-1.656H41.97v2.601h5.652v-.945H43.16Z" fill="#fff"></path></svg></i><span class="blind">베스트도전</span>`

const upChallenge = `<i class="ic-ch"><svg width="48" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 4a4 4 0 0 1 4-4h44v16a4 4 0 0 1-4 4H0V4Z" fill="#000" fill-opacity="0.7"></path><path d="M11.725 12.366v-1.728h2.367v-.954H9.457V7.506h4.572v-.954H8.26v4.086h2.277v1.728h-3.15v.972h7.506v-.972h-3.168Zm8.387-4.239v.963h1.296v2.943h1.188V5.985h-1.188v2.142h-1.296Zm.55 1.908c-1.306-.441-1.873-1.458-1.873-2.439v-.108H20.4v-.945h-4.455v.945h1.63v.117c0 1.044-.595 2.133-1.954 2.574l.594.945a3.25 3.25 0 0 0 1.99-1.8c.35.747.971 1.341 1.88 1.638l.576-.927Zm-2.34 3.15v-1.656h-1.189v2.601h5.652v-.945h-4.464Zm8.648-3.456h-1.62V7.605h1.62v2.124Zm1.17-3.06h-3.951v3.996h3.95V6.669Zm-1.827 4.77h-1.188v2.691h5.643v-.945h-4.455v-1.746Zm4.158-3.06V5.985h-1.188v6.048h1.188V9.351h1.098v-.972H30.47Zm6.695-1.485H35.33v-.873h-1.188v.873h-1.854v.936h4.878v-.936Zm-3.33 2.826c0-.432.36-.666.9-.666s.9.234.9.666c0 .432-.36.666-.9.666s-.9-.234-.9-.666Zm1.494 1.494c.864-.171 1.43-.738 1.43-1.494 0-.936-.836-1.566-2.024-1.566-1.188 0-2.025.63-2.025 1.566 0 .756.567 1.323 1.43 1.494v.702c-.728.018-1.412.018-2.006.018l.144.963c1.404 0 3.267 0 5.013-.342l-.09-.855a20.36 20.36 0 0 1-1.872.171v-.657Zm4.518-1.854h-1.035V5.985h-1.188v8.289h1.188v-3.933h1.035V9.36Z" fill="#fff"></path></svg></i><span class="blind">도전만화</span>`

fetch('./assets/data/recommend.json')
.then(res=>res.json())
.then(json=>{
  data=json.titleList;
  let html=``;
  data.forEach(element => {
    isBest = (element.webtoonLevelCode.includes("BEST_CHALLENGE"))?upBest:
    (element.webtoonLevelCode.includes("CHALLENGE"))?upChallenge:'';
    isUp = (element.up)?upEl:'';
    
    html+=`<li class="recommend-item">
    <a href="" class="img-area">
        ${isBest}
        <img src="${element.thumbnailUrl}" alt>
    </a>
    <div class="text-area">
        <strong>
            <a href="">
                ${isUp}
                <span class="text">${element.titleName}</span>
            </a>
        </strong>`        
        
        sub = element.author.writers;
        sub.forEach(element=>{
            html+=`<a href="" class="author">${element.name}</a>`
        })

        html+=`<div class="rating">
            <span>
                <i class="ic-star">
                    <svg width="12" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 12.991a.529.529 0 0 0-.5 0l-2.578 1.384a.529.529 0 0 1-.753-.632l.882-2.682a.529.529 0 0 0-.17-.576L.596 8.438a.529.529 0 0 1 .299-.94l3.049-.191a.529.529 0 0 0 .457-.33L5.51 4.22a.529.529 0 0 1 .982 0l1.107 2.756c.077.19.255.318.458.33l3.049.192c.481.03.674.637.299.94l-2.535 2.047a.529.529 0 0 0-.17.576l.881 2.682a.529.529 0 0 1-.752.632L6.25 12.99Z" fill="#999"></path></svg>
                    <span class="blind">별점</span>
                </i>
                <span class="text">${element.starScore.toFixed(2)}</span>
            </span>
            <span class="right">
                <i class="ic-view">
                    <svg width="14" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M13.575 8.948a.866.866 0 0 1 0 1.104C12.594 11.253 10.02 14 7 14S1.406 11.253.425 10.052a.866.866 0 0 1 0-1.104C1.406 7.746 3.98 5 7 5s5.594 2.746 6.575 3.948Z" fill="#999"></path><circle cx="7" cy="9.5" r="3" fill="#fff"></circle><circle cx="7" cy="9.5" r="2" fill="#999"></circle></svg>
                    <span class="blind">조회수</span>
                </i>`
            if(element.viewCount >=10000){
                html+=`<span class="text">${Math.floor(element.viewCount/10000)}만</span>`
            }else{
                html+=`<span class="text">${element.viewCount}</span>`
            }
            html+=`
            </span>
        </div>
    </div>
</li>`
  });
  $('#recommendList').html(html);
})

// 업데이트
fetch('./assets/data/updateDaily.json')
.then(res=>res.json())
.then(json=>{
  data=json.titleList;

  let html=``;
  data.forEach(element => {
    isUp = (element.up)?upEl:'';
    html+=`<div class="swiper-slide">
    <a href="" class="img-area">
        <i class="ic-time"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle opacity="0.7" cx="10" cy="10" r="10" fill="#000"></circle><path d="M2.292 10a7.708 7.708 0 1 0 7.717-7.708" stroke="#00DC64" stroke-width="1.276" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.182 4.665a.708.708 0 1 1-1.417 0 .708.708 0 0 1 1.417 0ZM7.582 2.974a.708.708 0 1 1-1.417 0 .708.708 0 0 1 1.417 0ZM2.87 7.833a.708.708 0 1 1 0-1.416.708.708 0 0 1 0 1.416Z" fill="#00DC64"></path><path d="M10 5v5" stroke="#00DC64" stroke-width="1.276" stroke-linecap="round" stroke-linejoin="round"></path></svg></i>
        <img src="${element.thumbnailUrl}" alt>
    </a>
    <div class="text-box">
        <strong>
            <a href="">
                ${isUp}
                <span class="text">${element.titleName}</span>
            </a>
        </strong>        
        <a href="" class="author">${element.displayAuthor}</a>
    </div>
</div>`
  });
  $('#updateDailyList').html(html);
})

const slide3 = new Swiper('.update-slide',{   
    slidesPerView: 5,
    slidesPerGroup: 5,
    navigation: {
        nextEl: ".update-next",
        prevEl: ".update-prev",
    },
})


// 묶음
fetch('./assets/data/bundle.json')
.then(res=>res.json())
.then(json=>{
  data=json.titleList;

  let html=``;
  data.forEach(element => {
    html+=`<div class="swiper-slide">
    <a href="" class="img-area">
        <img src="${element.thumbnailUrl}" alt>
    </a>
    <div class="text-box">
        <strong><a href="">${element.titleName}</a></strong>
        <a href="" class="author">${element.displayAuthor}</a>
        <p>${element.description}</p>
    </div>
</div>`
  });
  $('#bundleList').html(html);
})
const slide4 = new Swiper('.discount-slide',{   
    slidesPerView: 5,
    slidesPerGroup: 5,
    navigation: {
        nextEl: ".discount-next",
        prevEl: ".discount-prev",
    },
})


// 실시간인기랭킹
rankingDefaultList();
function rankingDefaultList(){
    fetch('./assets/data/rankingDefault.json')
    .then(res=>res.json())
    .then(json=>{
      ListArr=[ json.totalRankingTitleList, json.femaleRankingTitleList, json.maleRankingTitleList ]
      data=ListArr[idx];
      let html=``;
      data.forEach((element,i) => {
          rank = i+1;
          isUp = (element.up)?upEl:'';
          html+=`<li class="popular-item">
          <a href="" class="img-area">
              <img src="${element.thumbnailUrl}" alt>
          </a>
          <div class="num-area">
              <span class="num">${element.rank}</span>
          </div>
          <div class="text-area">
              <strong>
                  <a href="">
                      ${isUp}
                      <span class="text">${element.titleName}</span>
                  </a>
              </strong>
              <a href="" class="author">${element.displayAuthor}</a>
          </div>
      </li>`
      });
      $('#rankingDefaultList').html(html);
    })
}
$('.sc-popular .tab-list a').click(function(e){
    e.preventDefault();
    $('.sc-popular .tab-list a').removeClass('active');
    $(this).addClass('active');
    idx=$(this).parent().index();
    rankingDefaultList();
})


// 실시간신작랭킹
rankingNewList();
function rankingNewList(){
    fetch('./assets/data/rankingNew.json')
    .then(res=>res.json())
    .then(json=>{
      ListArr=[ json.totalRankingTitleList, json.femaleRankingTitleList, json.maleRankingTitleList ]
      data=ListArr[idx];
      let html=``;
      data.forEach((element,i) => {
          rank = i+1;
          isUp = (element.up)?upEl:'';
          html+=`<li class="ranking-item">
          <a href="" class="img-area">
              <img src="${element.thumbnailUrl}" alt>
          </a>
          <div class="num-area">
              <span class="num">${element.rank}</span>
          </div>
          <div class="text-area">
              <strong>
                  <a href="">
                    ${isUp}
                      <span class="text">${element.titleName}</span>
                  </a>
              </strong>
              <a href="" class="author">${element.displayAuthor}</a>
          </div>
      </li>`
      });
      $('#rankingNewList').html(html);
    })
}

$('.sc-ranking .tab-list a').click(function(e){
    e.preventDefault();
    $('.sc-ranking .tab-list a').removeClass('active');
    $(this).addClass('active');
    idx=$(this).parent().index();
    rankingNewList();
})