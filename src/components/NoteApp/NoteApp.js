import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }
        this.noteChangeHandler=this.noteChangeHandler.bind(this)
        this.inputColorHandler=this.inputColorHandler.bind(this)
        this.emptyInput=this.emptyInput.bind(this)
        this.addNote=this.addNote.bind(this)
        this.removeHandler=this.removeHandler.bind(this)
    }
    noteChangeHandler(event){
        this.setState({
            noteTitle:event.target.value
        })

    }
    inputColorHandler(color){
        this.setState({
            inputColor: color
        })
    }
    emptyInput(){
        this.setState({
            noteTitle:''
        })
    }
    addNote(){
        let newNote={
            id:this.state.notes.length + 1,
            title:this.state.noteTitle,
            color:this.state.inputColor
        }
        this.setState(prevState => ({
            notes: [...prevState.notes, newNote],
            noteTitle:'',
            inputColor:'#fff'

        }))
    
        console.log(newNote);
    }
    removeHandler(noteId) {
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== noteId)
        }));
    }
    
    

    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" 
                                         className="form-control" 
                                         type="text"
                                         style={{ backgroundColor: this.state.inputColor }} 
                                         placeholder="Something here..." 
                                         value={this.state.noteTitle}
                                         onChange={this.noteChangeHandler}/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map(color=>(
                                                 <ColorBox 
                                                 color={color}
                                                 key={color}
                                                 onColor={this.inputColorHandler}/>
                                            ))}
                                           
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button 
                                        onClick={this.addNote}
                                        id="btn-save" 
                                        type="button" 
                                        className="btn btn-outline-info"><span className="fa fa-plus" ></span></button>
                                        <button
                                        id="btn-delete"
                                        onClick={this.emptyInput}
                                        type="button" 
                                        className="btn btn-outline-danger"><span id="btn-icon"
                                        className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                                {this.state.notes.map(note=>(
                                                    <Note key={note.id} {...note} onRemove={this.removeHandler}/>

                                                ))}

                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}
