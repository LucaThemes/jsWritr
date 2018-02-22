# jsWritr

A simple JS script that writes a sentence on a screen in a bit more natural way.

## How to use it?

### 1. JS
Include **jswritr.js** file in your website footer:
```
<script type="text/javascript" src="PATH/TO/jswritr.js"></script>
````

### 2. CSS
Add this bit of CSS code:
```
#phrase-div,
#blink-div {
	display: inline-block;
}

#blink-div {
	margin-left: -5px;
}
```

### 3. HTML
Add this little structure at the place where you want jsWritr to show up
```
<div id="writr-div">
    <div id="phrase-div" class="phrase-div"></div>
    <div id="blink-div"></div>
</div>
```

## Version

* 0.0.1 - 2018-02-22
  Initial Release

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
