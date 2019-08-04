import React, { useState, useEffect } from 'react';
import './code-prettify-theme.css';

export function CodeTesting() {

    const [text, setText] = useState('');

    useEffect(() => {
        console.log(text)
    })

    return (
        <div>
            <pre class="prettyprint">
                <code>
                    {`
class codeTesting extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }   
    class codeTesting extends Component {
        render() {
            return (
                <div>
                    
                </div>
            );
        } 
        class codeTesting extends Component {
            render() {
                return (
                    <div>
                        
                    </div>
                );
            } 
            class codeTesting extends Component { class codeTesting extends Component { class codeTesting extends Component { class codeTesting extends Component { class codeTesting extends Component { class codeTesting extends Component { class codeTesting extends Component { class codeTesting extends Component { class codeTesting extends Component { class codeTesting extends Component {
                render() {
                    return (
                        <div>
                            
                        </div>
                    );
                } class codeTesting extends Component {
                    render() {
                        return (
                            <div>
                                
                            </div>
                        );
                    } class codeTesting extends Component {
                        render() {
                            return (
                                <div>
                                    
                                </div>
                            );
                        } 
                class codeTesting extends Component {
                    render() {
                        return (
                            <div>
                                
                            </div>
                        );
                    } 
                    class codeTesting extends Component {
                        render() {
                            return (
                                <div>
                                    
                                </div>
                            );
                        } 
}`}
                </code>
            </pre>
            <div>
                <textarea type="text" onChange={e => setText(e.target.value)} />
            </div>
            <pre class="prettyprint">
                <code>echo '&lt;pre&gt;', var_dump($foo), '&lt;/pre&gt;'</code>
            </pre>
        </div >
    );
}