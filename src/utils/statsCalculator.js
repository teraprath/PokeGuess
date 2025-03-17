export function getTotalStats(stats) {
    let totalStats = 0
    stats.forEach((stat) => {
        totalStats += stat.base_stat
    })
    return totalStats
}