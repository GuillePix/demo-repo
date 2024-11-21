/*random messages mini proj.
The output message is the result of the combination of three different elements of the arrays containing the wording.
*/

const randomFunnyMessageGen = () => {
    let blockOne = ['Never forget that','Today can be','Take all you can, because', 'Not even a chance']
    let blockTwo = ['the chance','and you will never ever know'];
    let blockThree = ['of a good day','your destiny','your life', 'your cat', 'the moon'];

    let message = [blockOne[Math.floor((Math.random()* blockOne.length))],
        blockTwo[Math.floor((Math.random()* blockTwo.length))],
        blockThree[Math.floor((Math.random()* blockThree.length))]];

    return message.join(' ');
}
console.log(randomMessageGen());