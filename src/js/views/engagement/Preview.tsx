import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import {
   Stepper,
   Step,
   StepLabel,
   StepContent,
 } from 'material-ui/Stepper';
import EngagementAction from '../../actions/EngagementAction2';
import EmailVectorPreview from './preview/EmailVectorPreview';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import EngagementRecord from '../../model/stateZ/engagement/EngagementRecord'

interface Preview {
    data: string,
    confirmed: boolean
}

class Preview extends React.Component<Props, {
    emailData: string,
    landingPageData: string,
    redirectPageData: string,
    step: number
}> {
    constructor() {
        super();
        this.state = {
            emailData: null,
            landingPageData: null,
            redirectPageData: null,
            step: 0 
        };
    }

    public render() {
        return (
            this.props.open
            &&
            <Dialog
                actions={
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={ this.finish }/>
                }
                style={ { paddingTop: 0} }
                repositionOnUpdate={ false }
                contentStyle={ 
                    { 
                        width: '95%',
                        maxWidth: 'none' 
                    } 
                }
                open={ !!this.props.open }>
                    <Stepper
                        activeStep={
                            this.state.step
                        }
                    >
                        <Step>
                            <StepLabel>Vector Email</StepLabel>
                        </Step>

                        <Step>
                            <StepLabel>Landing Page</StepLabel>
                        </Step>
                        
                        <Step>
                            <StepLabel>Redirect Page</StepLabel>
                        </Step>
                    </Stepper>
                    <div>
                        <div>
                            { this.renderContent() }
                        </div>
                        <div>
                            <FlatButton
                                label="Back"
                                disabled={this.state.step === 0}
                                onTouchTap={ this.onPrev }
                                style={{marginRight: 12}}
                                />
                            <RaisedButton
                                label={this.state.step === 2 ? 'Confirm and Finish' : 'Confirm'}
                                primary={true}
                                onTouchTap={ this.onNext }
                                />
                        </div>
                    </div>
            </Dialog>
        )
    }

    private finish = () => {
        this.setState({
                emailData: this.state.emailData,
                landingPageData: this.state.landingPageData,
                redirectPageData: this.state.redirectPageData,
                step: 0
            })
        this.props.dispatch(EngagementAction.togglePreview());
    }

    private onNext = () => {
        if(this.state.step === 2)
            this.finish()
        else {
            this.setState({
                emailData: this.state.emailData,
                landingPageData: this.state.landingPageData,
                redirectPageData: this.state.redirectPageData,
                step: this.state.step + 1
            })
        }
    }

    private onPrev = () => {
        this.state.step > 0
        && this.setState({
            emailData: this.state.emailData,
            landingPageData: this.state.landingPageData,
            redirectPageData: this.state.redirectPageData,
            step: this.state.step - 1
        })
    }

    private renderContent = () => {
        switch(this.state.step) {
            case 0:
                if(this.state.emailData)
                    return <iframe srcDoc={this.state.emailData} frameBorder="0"></iframe>
                else {
                    EngagementAction.previewEmail(this.props.engagement.emailTemplate.id)
                    .then(html => 
                        this.setState({
                            emailData: html,
                            landingPageData: this.state.landingPageData,
                            redirectPageData: this.state.redirectPageData,
                            step: this.state.step
                        })
                    )
                    return <CircularProgress size={80} thickness={7} />
                }
            case 1:
                if(this.state.landingPageData)
                    return <iframe srcDoc={this.state.landingPageData} frameBorder="0"></iframe>
                else {
                    EngagementAction.previewLandingPage(this.props.engagement.landingPage.id)
                    .then(html => 
                        this.setState({
                            emailData: this.state.emailData,
                            landingPageData: html,
                            redirectPageData: this.state.redirectPageData,
                            step: this.state.step
                        })
                    )
                    return <CircularProgress size={80} thickness={7} />
                }
            case 2:
                return 'Not yet implemented...';
        }
    }
}

interface Props {
    engagement?: EngagementRecord,
    open: boolean,
    dispatch?: Function
}

const mapStateToProps = (app: AppState): Props => ({
    engagement: app.preview.engagement,
    open: app.preview.open
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(Preview);