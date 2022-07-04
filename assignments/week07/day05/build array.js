var buildArray = function(nums) {
     let a = [];

    for (i = 0; i < nums.length; i++) {
        a[i] = nums[nums[i]];
    }

    return a;
};