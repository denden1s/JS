var endNumerator = 0;
var startNumerator = 0;
htmlStart = [];
htmlEnd = [];
function Templater() 
{
    this.div = function(...args)
    {
        htmlStart[startNumerator]= "<div>"
        args.forEach(el => {
             if(typeof el == "string")
            {
                htmlStart[startNumerator]+= el; 
            }
        });
        startNumerator+=1;
        htmlEnd[endNumerator] = "</div>";
        endNumerator += 1;
        return this;
    };
    this.br = function(...args)
    {
        if(args.length > 0)
        {
            console.error("Uncaught Error: Nested content is not allowed");
        }
        else
        {
            htmlEnd[endNumerator] = "<br>";
            endNumerator += 1;
        }
        return this;
    };

    this.span = function(text)
    {
        htmlStart[startNumerator] = "<span>";
        if(text != undefined && typeof text == "string") 
        {
            htmlStart[startNumerator] += text
        } 
        startNumerator += 1;
        htmlEnd[endNumerator] = "</span>";
        endNumerator += 1;
        return this;
    };

    this.p = function(text)
    {
        htmlStart[startNumerator] = "<p>";      
        if(text != undefined && typeof text == "string") 
        {
            htmlStart[startNumerator] += text
        } 
        startNumerator += 1;
        htmlEnd[endNumerator] = "</p>";
        endNumerator += 1;
        return this;
    }
    this.toString = function()
    {
        let start = this.htmlStart.reverse();
        let str = "";
        for(s of start)
        {
            str += s;
        }
        for(s of this.htmlEnd)
        {
            str += s;
        }
        console.log(str)
        return 0;
    }
    return this;
};

// TODO тут будет имплементация Templater

module.exports = function () {
    return new Templater()
}

/*const t = Templater().div(
    Templater().p("hello")
)
t.toString();*/
Templater().div().p().br().toString()
