// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import React from 'react'
import { ResponsivePie } from '@nivo/pie'


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function Chart(props){

    const data=props.data[0]
    return(
    <ResponsivePie
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        data={data}
        innerRadius={0.5}
        padAngle={0.7}
        itemWidth={80}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 70,
                itemHeight: 15,
                itemTextColor: '#999',
                itemDirection: 'top-to-bottom',
                itemOpacity: 1,
                itemPaddingRight : 20 ,
                symbolSize: 16,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                            itemOpacity: 0.5
                        }
                    }
                ]
            }
        ]}
    />)
}
