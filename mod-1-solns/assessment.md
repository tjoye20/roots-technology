# Module 1 Assessment

## What is the difference between a CLASS attribute and an ID attribute?
In the CSS, a class selector is a name preceded by a period (“.”) and an ID selector is a name preceded by the pound sign (“#”). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.

## What is an HTML attribute?
An HTML attribute is a characteristic or property of a element used in a HTML document.
It is content added to the opening tag of an element and can be used in different ways from providing information to changing styling.

## What is considered a container element by Flexbox?
A container element is any element that contains one or more elements within it.

## What is the CSS box model?
It is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

## What are the four different components of the box model?
Content - The content of the box, where text and images appear.
Padding - Clears an area around the content. The padding is transparent.
Border - A border that goes around the padding and content.
Margin - Clears an area outside the border. The margin is transparent.

## What is the default display of most HTML elements?
The default display for most elements "block".

## What does "display: block" mean?
It means the element takes up the full width of the line it's on, and each new element sttarts on the next line.

## What does "display: flex" mean?
"display: flex" expands the items in the container to fill all the available free space, and shrinks them to prevent overflow. 
Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based).

## What does "display: inline" mean?
An inline element displays on the line it's on, taking up only as much width as it needs.
Inline elements have a box that wraps tightly around their content only taking up the amount of space necessary to display their content and not require a new line after each element. Inline element can't be altered in size with the height or width CSS properties.

## Do you apply "display: flex" on a container element or a child element?
You apply "display:flex" on a container element.

## What is considered a child element in Flexbox?
The elements within the container element are the child elements.

## What's the difference between the "container-fluid" class vs the "container" class in Bootstrap?
The "container-fluid" class provides a full width container, spanning the entire width of the viewport.
Whereas, the "container" class provides a responsive fixed width container. 

## What is CSS specificity?
If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.

## Write out three ways to select elements using CSS.
-Element type selectors (e.g. h1, p, nav, img), 
-class selectors 
-and ID selectors.

## What are semantic elements and what is the purpose of them? Why use them? Who does it benefit?
Semantic elements accurately describe the purpose of the element and the type of content inside. Semantic elements such as header, nav, section, article, aside, and footer act more or less like div elements. Using them makes it easier for programmer to read and understand the code. It also has greater accessibility especially for people with sight impairment.

## What are the three classes you use in the basic Bootstrap grid structure?
container, row, col.

## In Bootstrap, should content be placed in the "rows" or the "cols"?
cols

## What CSS properties do you set to make your image responsive, and scale up?
Set the max-width to 100% and height to auto.

## Why use the alt attribute on an image tag?
The required alt attribute specifies an alternate text for an image, in case the image cannot be displayed.

## What group of users are Semantic elements especially helpful for?
Semantic elements are especially helpful for users with sight impairments.

## In CSS, how do you target an element using its ID attribute?
You use "#id". Ex.: #nav

## In CSS, how do you target an element using the Class attribute?
You use ".class"
Ex: ".header"
