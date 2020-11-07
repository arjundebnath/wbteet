changeFeature = (_this) => {
    Array.from(_this.parentElement.children).forEach(item => {
        item.classList.remove('active-feature-btn');
    });
    _this.classList.add('active-feature-btn');
}

changeClassBooks = (clsId) => {
    const bookContainers = document.getElementById('all-class-books-container').children;
    Array.from(bookContainers).forEach(container => {
        container.classList.add('d-none');
    });
    document.getElementsByClassName('books-shelf-' + clsId)[0].classList.remove('d-none');
}

openBook = (bookId) => {
    const bookList = {
        '01200': { title: 'Physics-XII', index: ['স্থির তড়িৎ বিজ্ঞান', 'প্রবাহী তড়িৎ', 'তড়িৎপ্রবাহের চৌম্বক ক্রিয়া ও চৌম্বকত্ব', 'তড়িৎচুম্বকীয় আবেশ', 'তড়িৎচুম্বকীয় তরঙ্গ', 'আলোক বিজ্ঞান', 'পদার্থের দ্বৈত সত্তা এবং বিকিরণ', 'পরমাণু ও নিউক্লিয়াস', 'ইলেকট্রনিক্স', 'সঞ্চার ব্যবস্থা'] },
        '01201': { title: 'Chemistry-XII', index: ['পদার্থের কঠিন অবস্থা', 'দ্রবণ', 'তড়িৎ রসায়ন', 'পৃষ্ঠতলের রসায়ন', 'p-ব্লক গ্রুপ-15 মৌলসমূহ', 'p-ব্লক গ্রুপ-16 মৌলসমূহ', 'p-ব্লক গ্রুপ-17 মৌলসমূহ', 'p-ব্লক গ্রুপ-18 মৌলসমূহ', 'd-f ব্লক মৌলসমূহ', 'কো-অর্ডিনেশন যৌগ বা জটিল যৌগ', 'হ্যালোঅ্যালকেন ও হ্যালোঅ্যারিন সমূহ', 'অ্যালকোহল ফেনল ও ইথার', 'অ্যালডিহাইড, কিটোন ও কার্বক্সিলিক অ্যাসিড', 'N-ঘটিত জৈব যৌগ সমূহ', 'জৈব অণু সমূহ', 'পলিমার', 'প্রাত্যহিক জীবনে রসায়ন'] },
        '01202': { title: 'Mathematics-XII', index: ['সম্বন্ধ', 'চিত্রণ', 'দ্বিপদ প্রক্রিয়া', 'ত্রিকোণমিতিক বিপরীত বৃত্তীয় প্রক্রিয়া', 'নির্ণায়ক', 'ম্যাট্রিক্স', 'সীমা, সন্ততা ও অন্তরকলন যোগ্যতা', 'প্রথম ও দ্বিতীয় ক্রমের অন্তরকলজ', 'অনিদৃষ্ট সমাকলন', 'নির্দিষ্ট সমাকলন', 'অবকল সমীকরণ', 'অন্তরকলজের ব্যাখ্যা', 'স্পর্শক ও অভিলম্ব', 'বর্ধিষ্ণু-ক্ষয়িষ্ণু অপেক্ষক এবং চরম-অবম মান', 'ক্ষেত্রফলরূপে নিদৃষ্ট সমাকল', 'ভেক্টর বীজগণিত', 'দুটি ভেক্টরের গুণ', 'ত্রিমাত্রিক দেশে সরলরেখা', 'সমতল', 'সম্ভাবনা', 'সম্ভাবনা বিভাজন ও দ্বিপদ বিভাজন'] },
        '01203': { title: 'Biology-XII', index: ['জীবের জনন', 'সপুষ্পক উদ্ভিদের যৌন জনন', 'মানুষের জনন', 'জনন সংক্রানত স্বাস্থ্য', 'বংশগতি ও বিভেদ', 'বংশগতির আণবিক ভিত্তি', 'অভিব্যক্তি বা বিবর্তন', 'অভিব্যক্তির কৌশল', 'স্বাস্থ্য ও রোগসমূহ', 'খাদ্য উৎপাদনের উন্নতিসাধন', 'মানবকল্যাণে মাইক্রোবস', 'জৈবপ্রযুক্তিবিদ্যা ও তার প্রয়োগ', 'বাস্তুসংস্থান, পরিবেশ ও জনসংখ্যা', 'বাস্তুতন্ত্র', 'জীববৈচিত্র এবং সংরক্ষণ', 'পরিবেশগত বিষয়'] },
    }
    const bookContainer = document.getElementById('open-book-container');
    const bookIndexPanel = document.getElementById('book-index-panel');
    const ul = bookIndexPanel.children[0];
    ul.innerHTML = '';
    const row = bookIndexPanel.parentElement;
    bookContainer.classList.remove('d-none');
    document.getElementById('subject-title').innerText = bookList[bookId]['title'];
    bookList[bookId]['index'].forEach((chapterName, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'py-1', 'bg-transparent', 'border-left-0', 'border-right-0', 'border-bottom-0', 'mx-2');
        li.style.fontSize = '13px';
        li.innerText = (index + 1) + '. ' + chapterName;
        ul.appendChild(li);
    });
    row.style.height = bookIndexPanel.getBoundingClientRect().height + 'px';
    bookIndexPanel.style.width = bookIndexPanel.getBoundingClientRect().width + 'px';
}

colorChange = () => {
    const colorList = ['bisque', 'whitesmoke', 'turquoise', 'darkkhaki', 'beige'];
    const container = document.getElementById('open-book-container');
    const leftpanel = document.getElementById('book-index-panel');
    const activeColor = container.style.background;
    const colorIndex = colorList.indexOf(activeColor);
    if (colorIndex > -1) {
        const nextColorIndex = (colorIndex + 1) % colorList.length;
        container.style.background = colorList[nextColorIndex];
        leftpanel.style.background = colorList[nextColorIndex];
    } else {
        container.style.background = '#ff9494';
        leftpanel.style.background = '#ff9494';
    }
    ['book-controler-panel', 'book-index-panel', 'book-page-panel'].forEach(panelId => {
    });
}

toggleIndexPanel = (_this) => {
    const indexPanel = document.getElementById('book-index-panel');
    const currentPanleWidth = indexPanel.getBoundingClientRect().width;
    const widthChangeTo = _this.getAttribute('data-indexpanelwidth');
    _this.setAttribute('data-indexpanelwidth', currentPanleWidth);
    indexPanel.style.width = widthChangeTo + 'px';
}