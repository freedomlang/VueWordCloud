var defaultSettings = {
    textColor: "rgb(200,200,200)",
    defaultFontFamily: 'Microsoft YaHei',
    defaultSpeed: 0.3,
    variantSpeed: 0.1
};

function getAngle() {
    var angle = Math.floor(Math.random() * 360);
    if ((angle > 75 && angle <105)||(angle >170 && angle < 190)||(angle >255 && angle < 285)||(angle >350 || angle < 10)) {
        return getAngle()
    }else {
        return angle;
    }
}

function randomInt(min = 14, max = 100) {
    return Math.max(parseInt(min), parseInt(Math.random() * parseInt(max)))
}

function Word(text, size, color, w, h, mouse, drawArea) {
    this.x = (Math.random() * 0.8 + 0.2) * w - 100;
    this.y = (Math.random() * 0.8 + 0.2) * h;
    this.text = text || 'test';
    this.size = size || randomInt(14);
    this.sizeText = this.size + 'px ' + (this.fontFamily || defaultSettings.defaultFontFamily);
    this.speed = defaultSettings.defaultSpeed + Math.random() * defaultSettings.variantSpeed;
    this.directionAngle = getAngle();
    this.color = color || defaultSettings.textColor;
    this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed
    };
    this.update = function() {
        this.border();
        // if the word is not hovered then move it
        if (!(mouse.x >= this.x && mouse.x <= this.x + this.width && mouse.y >= this.y - this.size && mouse.y <= this.y)) {
            this.x += this.vector.x;
            this.y += this.vector.y;
        }
    };
    this.border = function() {
        if (this.x + this.width > w || this.x < 0) {
            this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= this.size) {
            this.vector.y *= -1;
        }
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
    };
    this.draw = function() {
        drawArea.font = this.sizeText;
        drawArea.fillText(this.text, this.x, this.y);
        this.width = this.width || drawArea.measureText(this.text).width;
        drawArea.fillStyle = this.color;
    };
};

export default Word;