import {useEffect} from 'react';

const Example = () => {
	return(
		useEffect(() => {
			console.log("useEffect ran");
		});
	);
}

export default Example;
