import React, { Component } from "react"
import {connect} from "react-redux"
import {compose} from "redux"
import {firestoreConnect} from "react-redux-firebase"
import ArticleNames from './articleNames'

class Articles extends Component{
   render(){
       console.log(this.props)
    const {specialityName,topicName} = this.props.match.params
    const {Specialities,TopicNames,Articles} = this.props
    
    let content = null
    if(Articles != null){
        Specialities.map(item=>{
            if(item.Name===specialityName){
                TopicNames.map(record=>{
                    if(record.Name===topicName){
                        console.log("here")
                        content=
                        <div>
                            <ArticleNames 
                            SpecialityId={item.id}
                            TopicId={record.id}
                            Articles={Articles}
                            />
                        </div>
                    }
                })
            }
        })
    }else{
        content = <p>Loading...</p>
    }
    return(
        <div className="container-width">
            {content}
        </div>
    )
   }
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        Specialities: state.firestore.ordered.Specialities,
        TopicNames: state.firestore.ordered.TopicNames,
        Articles:state.firestore.ordered.Articles
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"Specialities"},
        {collection:"TopicNames"},
        {collection:"Articles"}
    ])
)(Articles)