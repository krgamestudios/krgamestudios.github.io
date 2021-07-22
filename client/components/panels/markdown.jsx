import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import PropTypes from 'prop-types';

class Markdown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			content: props.content || ''
		};
	}

	componentDidMount() {
		if (!this.state.content) {
			if (!this.props.url) {
				throw "Markdown requires either content or a url prop";
			}

			fetch(this.props.url)
				.then(result => result.text())
				.then(result => this.setState({ content: result }))
			;
		}
	}

	render() {
		if (this.state.content) {
			return (
				<ReactMarkdown rehypePlugins={[rehypeRaw]} children={this.state.content} {...this.props} />
			);
		}

		return (
			<p className='centered'>Loading markdown...</p>
		);
	}
};

Markdown.propTypes = {
	content: PropTypes.string,
	url: PropTypes.string,
};

export default Markdown;
