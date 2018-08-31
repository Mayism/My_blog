// 1.冒泡排序
// 原理：将相邻的元素两两比较，小数放在前面，大数放在后面，
// 直至最后一个元素。重复上述操作N次，直至所有元素都是按照从小到大的顺序排列(第二第三个元素的交换可能导致第一个元素大于第三个元素)

function bubbleSort(arr){
    for(var i=0; i<arr.length;i++){
        for(var j=0; j<arr.length-1-i; j++)
        {
            if(arr[j] >arr[j+1]){
                var tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}

// 2.选择排序
// 原理:寻找最小的元素放在数组的开始，然后在剩下的元素中寻找最小的元素，放在最小元素的后面，直至排序结束

function selectionSort(arr){
    var minIndex;
    for(var i=0; i<arr.length; i++){
        minIndex = i
        for(var j=i+1; i<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        var tmp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = tmp
    }
    return arr
}

print(bubbleSort([3,1,8,4,7]))
print(selectionSort([3,1,8,4,7]))

//3.插入排序
//原理：每次将一个新数据插入到有序数列的合适位置中去（上梁山的案例）
function insertSort(arr){
    for(var i=1; i<arr.length; i++){
        var key = arr[i]
        j = i-1 
        while(arr[j] > key){
            arr[j+1] = arr[j]//按照大小进行排序
            j--;
        }
        arr[j+1] = key
    }
    return arr
 }

 //4.合并排序
 //原理：合并排序采用的是分而治之的思想，分成一个由n个一维序列组成的数组，两两进行合并，直到排序完成
 function mergeSort(arr){
    var len = arr.length
    if(len < 2){
        return arr
    }
        var mid = Math.floor(len /2)
        var left = arr.slice(0,mid)
        var right = arr.slice(mid)
        return merge(mergeSort(left),mergeSort(right))
 }

 function merge(a,b){
        var c = []
        while(a.length > 0 && b.length >0){
            if(a[0] <= b[0]){
                c.push(a.shift())
            }else{
                c.push(b.shift())
            }
        }

        while(a.length){
            c.push(a.shift())
        }

        while(b.length){
            c.push(b.shift())
        }

        return c;
 }

 //5.快速排序
 //原理：在需要排序的数组中，任选一个元素作为“基准”，将小于和大于基准的元素分别放在左右两个数组中，对两个数组重复操作
 function quickSort(arr, left, right){
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left;
        right = typeof right != 'number' ? len - 1:right; 
    if(left < right){
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex-1)
        quickSort(arr, partitionIndex+1, right)
    }
    return arr
 }

 function partition(arr, left, right){
     var pivot = left,
         index = pivot + 1
     for(var i=index; i<arr.length; i++){
         if(arr[i] > arr[index]){
            swap(arr,i,index)//先将右边的数组进行排序
            i++
         }
     }
     swap(arr, pivot, index-1)//再讲排序后的最小的arr[index]与基准值进行排序
     return index - 1
 }

 function swap(arr,i,j){
    var tmp = arr[i];
    arr[i] = arr[j]
    arr[j] = tmp
 }

 //6.希尔排序（不是很熟，还要熟悉）
 //原理：希尔排序其实是插入排序的一种改进，希尔排序中通过设定一定的间隔将有一定距离的两个元素进行比较，再逐步减小间隔，直至排序完成。
 function shellSort(arr){
     var len = arr.length,
         temp,
         gap = 1
    while(gap < len/3){
        gap = gap * 3 + 1  //定义间隔
    }

    for(gap; gap>0; gap = Math.floor(len/3)){
        for(var i=gap; i<len ;i++){
            temp = arr[i]
            for(var j= i-gap; j>0 && arr[j] > temp; j-=gap){//比较间隔为gap的两元素的大小
                arr[j+gap] = arr[j]
            }
            arr[j+gap] = temp 
        }
    }
    return arr
 }

 //7.计数排序(不是很理解，还要多看看)
 //原理：计数排序是一种典型的非比较排序算法，不涉及元素之间的比较，该方法按顺序将元素从小到大放入排好序的数组中，再将排序好的数组进行组合
 //完成排序

 function countSort(arr){
    var len = arr.length,
        Count = [],
        Result = [],
        min = max = arr[0]
    //遍历数组，对每个元素出现的次数进行计数，并找出数组中的最大值和最小值
    for(var i=0;i<len;i++){
        Count[arr[i]] = Count[arr[i]] ? Count[arr[i]]+1 : 1;
        min = min <= arr[i] ? min : arr[i];
        max = max >= arr[i] ? max : arr[i];
    }
    //从最小值到最大值，将计数逐项相加
    for(var j=min;j<max;j++){
        Count[j+1] = (Count[j+1]||0)+(Count[j]||0) 
    }
    //Count中，下标为arr的数值，数据为数值出现的次数，反向填充数据进入result中去
    for(var j=len-1; j>=0;j--){
        Result[Count[j]-1] = arr[k]
        Count[arr[k]]--
    }
    return Result
 }

