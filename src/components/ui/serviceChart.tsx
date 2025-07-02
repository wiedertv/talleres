'use client'

import {useEffect} from 'react'
import * as echarts from 'echarts'

export default function ServicesChart() {
    useEffect(() => {
        const chartDom = document.getElementById('services-chart')
        if (chartDom) {
            const myChart = echarts.init(chartDom)
            const option = {
                animation: false,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['Con Vehículo', 'Sin Vehículo', 'Venta de Repuestos']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Con Vehículo',
                        type: 'bar',
                        stack: 'total',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 302, 301, 334, 390, 330],
                        color: '#2A5C8F'
                    },
                    {
                        name: 'Sin Vehículo',
                        type: 'bar',
                        stack: 'total',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230],
                        color: '#FF6B35'
                    },
                    {
                        name: 'Venta de Repuestos',
                        type: 'bar',
                        stack: 'total',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330],
                        color: '#4CB944'
                    }
                ]
            }
            myChart.setOption(option)

            return () => {
                myChart.dispose()
            }
        }
    }, [])

    return <div id="services-chart" style={{height: '300px'}}></div>
}