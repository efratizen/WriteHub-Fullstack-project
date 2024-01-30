import React, { useState } from 'react';

function Content({contentBook,handleSelectedbookStatus}) {
    const [index, setIndex] = useState(0);
    const handleNextChapter=(num)=>{
        if(index+num<0||index+num>contentBook.length-1){
          return;
        }
         setIndex(index+num);
      }
      
    return (
        <>
            {/* בקשה מהשרת להביא את השורות של הספר כל פעם של פרק אחר */}
            {contentBook&& contentBook[index].contentList.map((line, index) => (
            <p key={index}>{line}

                {/* Matthias cut a comical little figure as he wobbled his way along the cloisters, with his large sandals flip-flopping and his tail peeping from beneath the baggy folds of an oversized novice's habit. He paused to gaze upwards at the cloudless blue sky and tripped over the enormous sandals. Hazelnuts scattered out upon the grass from the rush basket he was carrying. Unable to stop, he went tumbling cowl over tail.

                Bump!

                The young mouse squeaked in dismay. He rubbed tenderly at his damp snub nose while slowly taking stock of where he had landed: directly at the feet of Abbot Mortimer!

                "Er, sorry, Father Abbot. I tripped, y'see. Trod on my Abbot, Father Habit. Oh dear, I mean..."

                The Father Abbot blinked solemnly over the top of his glasses. Matthias again. What a young buffoon of a mouse. Only the other day he had singed old Brother Methuselah's whiskers while lighting candles.

                "Oh Matthias, Matthias, my son," he said wearily. "When will you learn to take life a little slower, to walk with dignity and humility? How can you ever hope to be accepted as a mouse of Redwall, when you are always dashing about grinning from whisker to tail like a mad rabbit?"

                Matthias tossed the last of the hazelnuts into the basket and stood awkwardly shuffling his large sandals in the grass. How could he say aloud what was in his heart?

                The Abbot put his paw around the young mouse's shoulder, sensing his secret yearnings, for he had ruled Redwall wisely over a great number of years and gained much experience of mouselife. He smiled down at his young charge and spoke kindly to him. "Come with me, Matthias. It is time we talked together."

                A curious thrush perching in a gnarled pear tree watched the two figures make their way at a sedate pace in the direction of Great Hall, one clad in the dark greeny-brown of the order, the other garbed in the lighter green of a novice. They conversed earnestly in low tones. Thinking what a clever bird he was, the thrush swooped down on the basket that had been left behind. Twisters! The basket contained only hard nuts, locked tight within their shells. Feigning lack of interest, lest any other birds had been witness to his silly mistake, he began whistling jauntily a few bars of his melodious summer song, strolling nonchalantly over to the cloister walls in search of snails.

                It was cool inside Great Hall. Sunlight flooded down in slanting rainbow-hued shafts from the high, narrow stained-glass windows. A million colored dust-motes danced and swirled as the two mice trod the ancient stone floor. The Father Abbot halted in front of the wall on which hung a long tapestry. This was the pride and joy of Redwall. The oldest part had been woven by the Founders of the Abbey, but each successive generation had added to it; thus the tapestry was not only a priceless treasure, it was also a magnificent chronicle of early Redwall history.

                The Abbot studied the wonderment in Matthias's eyes as he asked him a question, the answer to which the wise mouse already knew. "What are you looking at, my son?"

                Matthias pointed to the figure woven into the tapestry. It was a heroic-looking mouse with a fearless smile on his handsome face. Clad in armor, he leaned casually on an impressive sword, while behind him foxes, wildcats and vermin fled in terror. The young mouse gazed in admiration.

                "Oh, Father Abbot," he sighed. "If only I could be like Martin the Warrior. He was the bravest, most courageous mouse that ever lived!"
                Bump!

                The young mouse squeaked in dismay. He rubbed tenderly at his damp snub nose while slowly taking stock of where he had landed: directly at the feet of Abbot Mortimer!

                "Er, sorry, Father Abbot. I tripped, y'see. Trod on my Abbot, Father Habit. Oh dear, I mean..."

                The Father Abbot blinked solemnly over the top of his glasses. Matthias again. What a young buffoon of a mouse. Only the other day he had singed old Brother Methuselah's whiskers while lighting candles.

                "Oh Matthias, Matthias, my son," he said wearily. "When will you learn to take life a little slower, to walk with dignity and humility? How can you ever hope to be accepted as a mouse of Redwall, when you are always dashing about grinning from whisker to tail like a mad rabbit?"

                Matthias tossed the last of the hazelnuts into the basket and stood awkwardly shuffling his large sandals in the grass. How could he say aloud what was in his heart?

                The Abbot put his paw around the young mouse's shoulder, sensing his secret yearnings, for he had ruled Redwall wisely over a great number of years and gained much experience of mouselife. He smiled down at his young charge and spoke kindly to him. "Come with me, Matthias. It is time we talked together."

                A curious thrush perching in a gnarled pear tree watched the two figures make their way at a sedate pace in the direction of Great Hall, one clad in the dark greeny-brown of the order, the other garbed in the lighter green of a novice. They conversed earnestly in low tones. Thinking what a clever bird he was, the thrush swooped down on the basket that had been left behind. Twisters! The basket contained only hard nuts, locked tight within their shells. Feigning lack of interest, lest any other birds had been witness to his silly mistake, he began whistling jauntily a few bars of his melodious summer song, strolling nonchalantly over to the cloister walls in search of snails.

                It was cool inside Great Hall. Sunlight flooded down in slanting rainbow-hued shafts from the high, narrow stained-glass windows. A million colored dust-motes danced and swirled as the two mice trod the ancient stone floor. The Father Abbot halted in front of the wall on which hung a long tapestry. This was the pride and joy of Redwall. The oldest part had been woven by the Founders of the Abbey, but each successive generation had added to it; thus the tapestry was not only a priceless treasure, it was also a magnificent chronicle of early Redwall history.

                The Abbot studied the wonderment in Matthias's eyes as he asked him a question, the answer to which the wise mouse already knew. "What are you looking at, my son?"

                Matthias pointed to the figure woven into the tapestry. It was a heroic-looking mouse with a fearless smile on his handsome face. Clad in armor, he leaned casually on an impressive sword, while behind him foxes, wildcats and vermin fled in terror. The young mouse gazed in admiration.

                "Oh, Father Abbot," he sighed. "If only I could be like Martin the Warrior. He was the bravest, most courageous mouse that ever lived!" */}
                
             <br></br>
            </p>))}
            <button id='btnNextChapter' onClick={()=>handleNextChapter(-1)}>previous</button>
            <button id='btnNextChapter' onClick={()=>handleNextChapter(1)}>next</button>
        </>
    );
}

export default Content;