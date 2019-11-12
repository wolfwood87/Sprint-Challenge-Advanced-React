- [ ] Why would you use class component over function components (removing hooks from the question)?

	- without hooks, class components hold state better than function components. The state is then passed to the function components which work with the data.
- [ ] Name three lifecycle methods and their purposes.
	-ComponentDidMount - The method runs when the render method of the component is invoked for the first time. It runs only once.
	-ComponentDidUpdate - This method runs whenever the render method is invoked again. It runs every time the render method updates.
	-render - this runs whenever a piece of DOM needs to be returned. It exists across both mounting and updating phase and is required in all class components.
	
- [ ] What is the purpose of a custom hook?
	- allows us to reuse the same hook over and over again in different contexts.
- [ ] Why is it important to test our apps?
	-it's important to test our apps because it catches bugs in the code, it makes us think of how to write our code better, and gives us more confidence in the code we write.