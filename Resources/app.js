import Crashlytics from 'ti.crashlytics';

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var btn = Ti.UI.createButton({
    title: 'Test Crash'
});

btn.addEventListener('click', () => {
    Crashlytics.crash();
});

win.add(btn);
win.open();