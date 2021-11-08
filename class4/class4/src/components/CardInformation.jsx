/* eslint-disable react/prop-types */
import React from 'react';

class CardInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', flag: props.flag };
  }

  componentDidMount() {
    if (this.state.flag === true) {
      this.setState({ title: 'Este es el nuevo titulo' });
    } else {
      this.setState({ title: 'Este es el titulo' });
    }
  }

  render() {
    console.log(this.props, this.state);
    return (
      <article className="w-full flex flex-col flex-wrap mt-20">
        <div className="flex-row flex-wrap text-center mx-auto mb-10">
          <h1 className="text-3xl font-semibold text-gray-700 text-center">Componentes en clases</h1>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="w-1/4 h-auto flex flex-col mx-auto bg-gray-100 shadow-xl rounded-lg px-5 py-5">
            <div className="text-center text-lg">
              <h1 className="font-semibold text-center text-lg text-gray-700">
                {this.state.title}
              </h1>
            </div>
            <div className="text-center text-lg">
              <p className="text-center text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ab quia, deleniti modi dolorem commodi! Nihil dicta
                ipsum ipsa consectetur.
              </p>
            </div>
          </div>
          <div className="w-1/4 h-auto flex flex-col mx-auto bg-gray-100 shadow-xl rounded-lg px-5 py-5">
            <div className="text-center text-lg">
              <h1 className="font-semibold text-center text-lg text-gray-700">
                Este es el titulo
              </h1>
            </div>
            <div className="text-center text-lg">
              <p className="text-center text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ab quia, deleniti modi dolorem commodi! Nihil dicta
                ipsum ipsa consectetur.
              </p>
            </div>
          </div>
          <div className="w-1/4 h-auto flex flex-col mx-auto bg-gray-100 shadow-xl rounded-lg px-5 py-5">
            <div className="text-center text-lg">
              <h1 className="font-semibold text-center text-lg text-gray-700">
                Este es el titulo
              </h1>
            </div>
            <div className="text-center text-lg">
              <p className="text-center text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ab quia, deleniti modi dolorem commodi! Nihil dicta
                ipsum ipsa consectetur.
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default CardInformation;
