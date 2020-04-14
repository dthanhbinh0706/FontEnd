function calcRate(r) {
    const f = ~~r,//Tương tự Math.floor(r)
    id = 'star' + f + (r % f ? 'half' : '')
    id && (document.getElementById(id).checked = !0)
   }