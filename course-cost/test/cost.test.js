/* Write unit tests that:
    - Ensure that courses get different prices across discount windows x2 for the 40% and 20% discount windows
    - Ensure different courses has different prices x 3 for each course
    - Ensure that invalid course codes are handled correctly
    - Ensure that invalid dates returns a status of: Invalid day*/

describe('Test the courseCost function' , function(){
    it('it should return "{ status: "Invalid code" }" when called with "p3,2023-05-01"' , function(){
        const invalCode = {status:'Invalid code'};
        assert.deepEqual(invalCode,courseCost("p3", "2023-05-01"));
    });
    it('it should return "{ status: "Invalid day" }" when called with "p1,2023-05-32"' , function(){
        const invalDate = {status:'Invalid day'};
        assert.deepEqual(invalDate,courseCost("p1", "2023-05-32"));
    });
    it('it should return the cost of the Python course with a 40% discount when called with "p1,2023-05-24"' , function(){
        const python40 = {
                            "status": "success",
                            "code": "p1",
                            "description": "Python",
                            "cost": 7850,
                            "discount": 3140,
                            "amountDue": 4710
                        }
        assert.deepEqual(python40,courseCost("p1", "2023-05-24"));
    });

    it('it should return the cost of the Python course with a 20% discount when called with "p1,2023-05-13"' , function(){
        const python20 = {
            "status": "success",
            "code": "p1",
            "description": "Python",
            "cost": 7850,
            "discount": 1570,
            "amountDue": 6280
        }
        assert.deepEqual(python20,courseCost("p1", "2023-05-13"));
    });

    it('it should return the cost of the Python course with no discount when called with "p1,2023-05-08"' , function(){
        const python0 = {
            "status": "success",
            "code": "p1",
            "description": "Python",
            "cost": 7850,
            "discount": 0,
            "amountDue": 7850
        }
        assert.deepEqual(python0,courseCost("p1", "2023-05-08"));
    });

    it('it should return the cost of the Ruby on Rails intro course with no discount when called with "r1,2023-05-08"' , function(){
        const ruby0 = {
            "status": "success",
            "code": "r1",
            "description": "Ruby on Rails intro",
            "cost": 5675,
            "discount": 0,
            "amountDue": 5675
        }
        assert.deepEqual(ruby0,courseCost("r1", "2023-05-08"));
    });

    it('it should return the cost of the Intro to PHP course with no discount when called with "p2,2023-05-08"' , function(){
        const php0 = {
            "status": "success",
            "code": "p2",
            "description": "Intro to PHP course",
            "cost": 8990,
            "discount": 0,
            "amountDue": 8990
        }
        assert.deepEqual(php0,courseCost("p2", "2023-05-08"));
    });
});