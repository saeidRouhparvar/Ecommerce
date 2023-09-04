import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const MiddlewareRoute = (props: any) => {
    const [ButtonData, SetButtonData] = useState({
        style: {display: "none"},
        onClick: () => {

        }
    })
    const location = useLocation()
    const {pathname} = location

    const getPWADisplayMode = () => {
       try {
           const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
           if (document.referrer.startsWith('android-app://')) {
               return 'twa';
           } else {
               // @ts-ignore
               if (navigator.standalone || isStandalone) {
                   return 'standalone';
               }
           }
           return 'browser';
       }catch (e) {
           return "testScreen"
       }
    }
    useEffect(() => {
        if (getPWADisplayMode() !== "browser" && pathname !== "/introduction") {
            return
        }
        window.addEventListener('beforeinstallprompt', (deferredPrompt: any) => {
            deferredPrompt.preventDefault();
            console.log('PWA was not installed');
            SetButtonData(last => ({
                ...last,
                style: {
                    display: "block"
                },
                onClick: () => {
                    SetButtonData(last => ({
                        ...last,
                        style: {
                            display: "none"
                        }
                    }))
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult: any) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the A2HS prompt');
                        } else {
                            console.log('User dismissed the A2HS prompt');
                        }
                        deferredPrompt = null;
                    });
                }
            }))

        });
        window.addEventListener('appinstalled', () => {
            // hideInstallPromotion();gn
            SetButtonData(last => ({
                ...last,
                style: {
                    display: "none"
                }
            }))

            console.log('PWA was installed');
        });


    })

    const Component = props.component
    return (
        <React.Fragment>
            {getPWADisplayMode() === "browser" && pathname === "/introduction" &&
                <button className="add-button !hidden" {...ButtonData}>نصب با یک کلیک !!</button>}

            <Component child={props.child}/>
        </React.Fragment>
    )
}

export default MiddlewareRoute
