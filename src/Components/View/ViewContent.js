import React, {Component} from 'react';
import TeamCalendarScene from '../Scenes/TeamCalendarScene';

export class ViewContent extends Component{

    render(){
        return(
            <main className="mdl-layout__content">
                <div className="page-section">
                    <TeamCalendarScene />
                </div>
            </main>
        )
    }

}

export default ViewContent;
