//算法图解:贪婪算法

states_needed = (["mt","wa","or","id","nv","ut","ca","az"])
# 广播站需要覆盖的洲
stations = {}
# 每个广播台可覆盖的洲
stations["kone"] = set(["id","nv","ut"])
stations["ktwo"] = set(["wa","id","mt"])
stations["kthree"] = set(["or","nv","ca"])
stations["kfour"] = set(["nv","ut"])
stations["kfive"] = set(["ca","az"])
# 存储最终选择的广播台
final_stations = set()

best_stations = None
# 存储的为覆盖最多未覆盖的广播台的集合
states_covered = set()
# 表示该广播台所有的未覆盖的洲
for station, states_for_station in stations.items():
    covered = states_needed & states_for_station
    if len(covered) > len(states_covered):
        best_stations  = station
        states_covered = covered
states_needed -= states_covered
final_stations.add(best_stations)

print(final_stations)
