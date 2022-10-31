// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import React from 'react'
import { ResponsiveFunnel } from '@nivo/funnel'


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function Chartacc(props) {

    const data = props.data
    return (
        <ResponsiveFunnel
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            valueFormat=">-.4s"
            colors={{ scheme: 'spectral' }}
            borderWidth={20}
            labelColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        3
                    ]
                ]
            }}
            beforeSeparatorLength={100}
            beforeSeparatorOffset={20}
            afterSeparatorLength={100}
            afterSeparatorOffset={20}
            currentPartSizeExtension={10}
            currentBorderWidth={40}
            motionConfig="wobbly"
        />
    )

}